"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import Matter from "matter-js";

interface LanyardProps {
  children: ReactNode;
}

export default function Lanyard({ children }: LanyardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const highlightPathRef = useRef<SVGPathElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const engineRef = useRef<Matter.Engine | null>(null);
  const cardBodyRef = useRef<Matter.Body | null>(null);
  const ropeBodiesRef = useRef<Matter.Body[]>([]);
  const anchorBodyRef = useRef<Matter.Body | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const frameIdRef = useRef<number>(0);

  useEffect(() => {
    let isMounted = true;

    const initPhysics = () => {
      if (!isMounted || !containerRef.current || !cardRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const cardRect = cardRef.current.getBoundingClientRect();
      
      // Jika tinggi kartu masih 0 (gambar belum termuat), tunggu frame berikutnya
      if (cardRect.height === 0) {
        requestAnimationFrame(initPhysics);
        return;
      }

      // Setup ukuran (karena sudah ada aspect-ratio, nilai ini dijamin valid)
      const CARD_WIDTH = cardRect.width;
      const CARD_HEIGHT = cardRect.height;
      const centerX = containerRect.width / 2;
      const startY = 20;
      
      const engine = Matter.Engine.create();
      engine.gravity.y = 1.2;
      engineRef.current = engine;

      const world = engine.world;

      // 1. Anchor
      const anchor = Matter.Bodies.circle(centerX, startY, 5, { isStatic: true });
      anchorBodyRef.current = anchor;

      // 2. Rope Segments
      const ropeSegments = [];
      const numSegments = 4;
      const segmentLength = 25;
      const segmentRadius = 3;

      for (let i = 1; i <= numSegments; i++) {
        const segment = Matter.Bodies.circle(centerX, startY + i * segmentLength, segmentRadius, {
          frictionAir: 0.05,
          density: 0.002,
        });
        ropeSegments.push(segment);
      }
      ropeBodiesRef.current = ropeSegments;

      // 3. Card
      const cardY = startY + (numSegments + 1) * segmentLength + CARD_HEIGHT / 2;
      const cardBody = Matter.Bodies.rectangle(centerX, cardY, CARD_WIDTH, CARD_HEIGHT, {
        frictionAir: 0.05,
        density: 0.005,
        restitution: 0.1,
      });
      cardBodyRef.current = cardBody;

      // 4. Constraints
      const constraints = [];
      
      constraints.push(Matter.Constraint.create({
        pointA: { x: centerX, y: startY },
        bodyB: ropeSegments[0],
        length: segmentLength,
        stiffness: 0.8,
      }));

      for (let i = 0; i < ropeSegments.length - 1; i++) {
        constraints.push(Matter.Constraint.create({
          bodyA: ropeSegments[i],
          bodyB: ropeSegments[i + 1],
          length: segmentLength,
          stiffness: 0.8,
        }));
      }

      constraints.push(Matter.Constraint.create({
        bodyA: ropeSegments[ropeSegments.length - 1],
        bodyB: cardBody,
        pointB: { x: 0, y: -CARD_HEIGHT / 2 },
        length: segmentLength,
        stiffness: 0.8,
      }));

      Matter.Composite.add(world, [anchor, ...ropeSegments, cardBody, ...constraints]);

      // --- RENDER LOOP ---
      const updateRender = () => {
        if (!isMounted) return;
        Matter.Engine.update(engine, 1000 / 60);

        const card = cardBodyRef.current;
        const bodies = ropeBodiesRef.current;
        const anchor = anchorBodyRef.current;

        if (card && bodies.length > 0 && anchor && pathRef.current && cardRef.current) {
          const posX = card.position.x - CARD_WIDTH / 2;
          const posY = card.position.y - CARD_HEIGHT / 2;
          cardRef.current.style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${card.angle}rad)`;

          let d = `M ${anchor.position.x} ${anchor.position.y}`;
          bodies.forEach((body) => {
            d += ` L ${body.position.x} ${body.position.y}`;
          });
          const attachPointY = card.position.y - CARD_HEIGHT / 2;
          d += ` L ${card.position.x} ${attachPointY}`;

          pathRef.current.setAttribute("d", d);
          if (highlightPathRef.current) {
            highlightPathRef.current.setAttribute("d", d);
          }
        }

        frameIdRef.current = requestAnimationFrame(updateRender);
      };

      frameIdRef.current = requestAnimationFrame(updateRender);
    };

    // Mulai inisialisasi (dengan retry jika gambar belum termuat)
    requestAnimationFrame(initPhysics);

    // --- CLEANUP ---
    return () => {
      isMounted = false;
      cancelAnimationFrame(frameIdRef.current);
      if (engineRef.current) {
        Matter.Engine.clear(engineRef.current);
        Matter.World.clear(engineRef.current.world, false);
      }
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardBodyRef.current) return;
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);

    const rect = e.currentTarget.getBoundingClientRect();
    offsetRef.current = {
      x: e.clientX - (rect.left + rect.width / 2),
      y: e.clientY - (rect.top + rect.height / 2),
    };
    
    Matter.Body.setVelocity(cardBodyRef.current, { x: 0, y: 0 });
    Matter.Body.setAngularVelocity(cardBodyRef.current, 0);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !cardBodyRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let targetX = e.clientX - containerRect.left - offsetRef.current.x;
    let targetY = e.clientY - containerRect.top - offsetRef.current.y;

    targetX = Math.max(120, Math.min(targetX, containerRect.width - 120));
    targetY = Math.max(100, Math.min(targetY, containerRect.height + 50));

    Matter.Body.setPosition(cardBodyRef.current, { x: targetX, y: targetY });
    Matter.Body.setVelocity(cardBodyRef.current, { 
      x: e.movementX * 0.5, 
      y: e.movementY * 0.5 
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex h-[600px] w-full items-start justify-center overflow-hidden"
      style={{ touchAction: "none" }}
    >
      <svg
        ref={svgRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <path
          ref={pathRef}
          fill="none"
          stroke="#1e293b"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-md"
        />
        <path
          ref={highlightPathRef}
          fill="none"
          stroke="#475569"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div
        ref={cardRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="absolute top-0 left-0 cursor-grab active:cursor-grabbing will-change-transform z-10"
      >
        {children}
      </div>
    </div>
  );
}