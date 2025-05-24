# GitHub Explorer

A sleek, modern Next.js application to explore GitHub users and their repositories, complete with README viewing and a clean UI/UX experience.

## Features

* Search GitHub users by username.
* View user profile with avatar, name, bio.
* Browse public repositories of the user.
* View README files rendered as HTML for each repository.
* Responsive and accessible design with Tailwind CSS.
* Uses Next.js 13+ App Router with server components.
* Fetches data directly from the GitHub API.
* Error handling for non-existent users or repositories.
* Smooth navigation with Next.js routing.

## Demo

[https://github-explorer-six-tawny.vercel.app/](https://github-explorer-six-tawny.vercel.app/)

## Tech Stack

* Next.js 13+ (App Router)
* React (with Server Components & Client Components)
* Tailwind CSS for styling
* TypeScript for type safety
* GitHub REST API for data fetching

## Getting Started

### Prerequisites

* Node.js (v18 or later recommended)
* npm or yarn

### Installation

1. Clone the repo:

```bash
git clone https://github.com/yourusername/github-explorer.git
cd github-explorer
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure next.config.js to allow GitHub avatar images:

```js
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  }
};
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
/app                # Next.js App Router pages
/components         # React components (SearchBar, ProjectCard, etc.)
/lib                # API utility functions (githubApi.ts)
/types              # TypeScript type definitions
/public             # Static assets
/context            # React Context
/next.config.js     # Next.js configuration
/package.json       # Project metadata and scripts
```

## Available Scripts

* `dev` – Run development server
* `build` – Build production optimized app
* `start` – Run production server

## Notes

* The app uses GitHub's public REST API. For higher rate limits, consider adding GitHub OAuth or personal access tokens.
* The README HTML rendering uses `dangerouslySetInnerHTML`, so be cautious with any user-generated content.
* Responsive design tested on desktop and mobile devices.
* The UI uses Tailwind CSS utilities and custom styles for a clean look.

## License

MIT License © Beta Priyoko
