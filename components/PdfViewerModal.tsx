"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface PdfViewerModalProps {
  url: string | null;
  onClose: () => void;
}

export default function PdfViewerModal({ url, onClose }: PdfViewerModalProps) {
  useEffect(() => {
    // Menutup modal dengan tombol ESC
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (url) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Mencegah scroll di belakang modal
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = ""; // Kembalikan scroll
    };
  }, [url, onClose]);

  if (!url) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 animate-in zoom-in-95 duration-200">
        
        {/* Header Modal */}
        <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Document Preview
          </h3>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Iframe PDF */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-950">
          <iframe
            src={url}
            className="h-full w-full border-none"
            title="PDF Preview"
          />
        </div>
        
      </div>
    </div>
  );
}