import dynamic from "next/dynamic";
const ProjectCard = dynamic(() => import("@/components/ProjectCard"));
import { getRepos, getUser } from "@/lib/githubApi";
import { Repo, GitHubUser } from "@/types/github";
import Image from "next/image";

export const revalidate = 60;

export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  try {
    const [repos, user]: [Repo[], GitHubUser] = await Promise.all([
      getRepos(username),
      getUser(username),
    ]);

    return (
      <main className="min-h-screen px-4 py-8 bg-gradient-to-b from-white via-blue-50 to-blue-100">
        <div className="max-w-5xl mx-auto">
          {/* User Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 mb-10">
            <Image
              src={user.avatar_url}
              alt={user.name || user.login}
              width={80}
              height={80}
              priority
              className="rounded-full shadow-md border-2 border-white"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
                {user.name || user.login}
              </h1>
              <p className="text-gray-600">@{user.login}</p>
              {user.bio && (
                <p className="mt-2 text-gray-700 max-w-xl">{user.bio}</p>
              )}
            </div>
          </div>

          {/* Repo List */}
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            📦 Repositories ({repos.length})
          </h2>

          {repos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} username={username} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-lg italic mt-10">
              Tidak ada repository yang ditemukan.
            </p>
          )}
        </div>
      </main>
    );
  } catch (error) {
    // Show user-friendly error if user not found or API failed
    return (
      <main className="min-h-screen flex items-center justify-center px-4 py-8 bg-gray-50">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            User Not Found
          </h1>
          <p className="text-gray-700 mb-6">
            Sorry, the GitHub user{" "}
            <span className="font-semibold">{username}</span> does not exist or
            could not be found.
          </p>
          <a
            href="/"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Back to Search
          </a>
        </div>
      </main>
    );
  }
}
