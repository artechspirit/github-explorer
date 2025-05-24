"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGitHub } from "@/context/GithubContext";
import { FaGithub, FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const { setUsername } = useGitHub();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Username tidak boleh kosong");
      return;
    }
    setError("");
    setUsername(input.trim());
    router.push(`/${input.trim()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center mt-7 max-w-md mx-auto px-4"
      role="search"
      aria-label="Search GitHub username"
    >
      <div className="relative w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Cari username GitHub..."
          className={`
            w-full
            rounded-full
            border
            border-gray-300
            pl-12
            pr-4
            py-3
            text-lg
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-transparent
            transition
            shadow-sm
            ${error ? "border-red-500" : ""}
          `}
          aria-invalid={error ? "true" : "false"}
          aria-describedby="error-message"
          autoComplete="off"
          spellCheck={false}
        />
        <FaGithub
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          aria-hidden="true"
          size={18}
        />
      </div>
      <button
        type="submit"
        className="ml-4 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-semibold rounded-full px-6 py-3 transition-shadow shadow-md"
      >
        Cari
      </button>
      {error && (
        <p
          id="error-message"
          className="text-red-600 mt-2 text-sm absolute top-full left-0 max-w-md mx-auto"
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
