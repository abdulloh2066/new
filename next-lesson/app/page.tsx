"use client"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="flex items-center justify-between rounded-xl bg-white px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">
          My Dashboard
        </h1>
        <nav className="flex gap-3">

          <Link
            href="/homee"
            className="rounded-lg bg-gray-100 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-200"
          >
            Home sahifasi
          </Link>
        </nav>

      </header>


    </div>
  );
}
