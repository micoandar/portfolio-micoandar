import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

// Nama file yang sekarang ada di dalam folder ini
const FILE = "3D.webm";

function isAllowed(req: NextRequest): boolean {
  const referer = req.headers.get("referer") || "";
  const origin = req.headers.get("origin") || "";
  const host = req.headers.get("host") || "";

  if (!host) return false;

  // Harus datang dari site ini (via referer atau origin header)
  return referer.includes(host) || origin.includes(host);
}

export async function GET(req: NextRequest) {
  // Tolak request tanpa referer (akses URL langsung, curl tanpa spoof, dll)
  if (!isAllowed(req)) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // Path diubah menunjuk ke dalam folder app/api/video/3d
  const filePath = path.join(process.cwd(), "app", "api", "video", "3d", FILE);

  let data: Buffer;
  try {
    data = await fs.readFile(filePath);
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }

  const size = data.byteLength;

  // Support Range request (dibutuhkan Safari & Chrome untuk streaming video)
  const range = req.headers.get("range");
  if (range) {
    const match = /bytes=(\d*)-(\d*)/.exec(range);
    if (match) {
      const start = match[1] ? parseInt(match[1], 10) : 0;
      const end = match[2] ? parseInt(match[2], 10) : size - 1;
      
      if (start >= 0 && end < size && start <= end) {
        const slice = data.subarray(start, end + 1);
        return new NextResponse(new Uint8Array(slice), {
          status: 206,
          headers: {
            "Content-Type": "video/webm",
            "Content-Length": String(slice.byteLength),
            "Content-Range": `bytes ${start}-${end}/${size}`,
            "Accept-Ranges": "bytes",
            "Cache-Control": "public, max-age=31536000, immutable",
            "X-Content-Type-Options": "nosniff",
            "Content-Disposition": "inline",
          },
        });
      }
    }
  }

  // Full request tanpa Range header
  return new NextResponse(new Uint8Array(data), {
    status: 200,
    headers: {
      "Content-Type": "video/webm",
      "Content-Length": String(size),
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
      "Content-Disposition": "inline",
    },
  });
}