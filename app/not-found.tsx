import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-ink px-4 text-center">
      <p className="font-[family-name:var(--font-teko)] text-6xl text-blood">404</p>
      <h1 className="mt-4 font-[family-name:var(--font-mukta)] text-xl text-white">
        पृष्ठ नहीं मिला
      </h1>
      <Link
        href="/"
        className="mt-8 rounded-full border border-blood/50 bg-blood/10 px-6 py-2 font-[family-name:var(--font-poppins)] text-sm text-white transition hover:bg-blood/30"
      >
        मुखपृष्ठ पर लौटें
      </Link>
    </main>
  );
}
