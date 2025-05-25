"use client";
import dynamic from "next/dynamic";
const SearchBar = dynamic(() => import("@/components/SearchBar"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-y-2 items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4 animate-fadeIn">
        GitHub Explorer
      </h1>
      <p className="text-blue-700 text-lg sm:text-xl max-w-xl text-center animate-fadeIn delay-150">
        Cari dan lihat project serta README pengguna GitHub dengan mudah.
      </p>
      <SearchBar />
    </main>
  );
}
