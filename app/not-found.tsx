import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-7xl font-black text-gradient">404</p>
      <h1 className="text-2xl font-bold text-slate-800">Halaman tidak ditemukan</h1>
      <Link
        href="/"
        className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}