import Link from "next/link";
import { Repo } from "@/types/github";
import { formatDistanceToNow } from "date-fns";

export default function ProjectCard({
  repo,
  username,
}: {
  repo: Repo;
  username: string;
}) {
  const updatedAgo = formatDistanceToNow(new Date(repo.updated_at), {
    addSuffix: true,
  });

  return (
    <Link href={`/${username}/${repo.name}`} className="block">
      <div className="group border rounded-xl p-5 shadow-sm bg-white hover:shadow-lg transition-all duration-200">
        <h3 className="font-semibold text-lg text-blue-700 group-hover:underline">
          {repo.name}
        </h3>
        {repo.description && (
          <p className="text-gray-700 text-sm mt-1 line-clamp-2">
            {repo.description}
          </p>
        )}
        <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
          <div className="flex items-center gap-4">
            <span>⭐ {repo.stargazers_count}</span>
            {repo.language && <span>📝 {repo.language}</span>}
          </div>
          <span>{updatedAgo}</span>
        </div>
      </div>
    </Link>
  );
}
