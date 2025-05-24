export const GITHUB_API = process.env.GITHUB_API;

export async function getRepos(username: string) {
  const res = await fetch(`${GITHUB_API}/users/${username}/repos`, {
    next: { revalidate: 60 }, // cache selama 60 detik
  });

  if (res.status === 404) {
    throw new Error(`User "${username}" not found`);
  }

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const data = await res.json();
  return data;
}

export async function getUser(username: string) {
  const res = await fetch(`${GITHUB_API}/users/${username}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    throw new Error(`User "${username}" not found`);
  }

  if (!res.ok) {
    throw new Error("Failed to fetch user profile");
  }

  const data = await res.json();
  return data;
}

export async function getReadmeHtml(username: string, repo: string) {
  const res = await fetch(`${GITHUB_API}/repos/${username}/${repo}/readme`, {
    headers: { Accept: "application/vnd.github.v3.html" },
    next: { revalidate: 60 },
  });

  if (res.status === 404) return "<p><i>README not found.</i></p>";
  if (!res.ok) throw new Error("Failed to fetch README");

  const html = await res.text();
  return html;
}
