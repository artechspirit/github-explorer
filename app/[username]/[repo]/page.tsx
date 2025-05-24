import { getReadmeHtml } from "@/lib/githubApi";
import Link from "next/link";

export default async function ReadmePage({
  params,
}: {
  params: Promise<{ username: string; repo: string }>;
}) {
  const { username, repo } = await params;
  const html = await getReadmeHtml(username, repo);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              📘 {repo} — README
            </h1>
            <p className="text-gray-500 mt-1">
              by <span className="font-medium">@{username}</span>
            </p>
          </div>
          <Link
            href={`/${username}`}
            className="mt-4 sm:mt-0 inline-block text-sm text-blue-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
          >
            ← Back to repositories
          </Link>
        </div>

        <article
          className="markdown-body bg-white p-6 rounded-xl shadow overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
