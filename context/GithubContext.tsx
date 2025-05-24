"use client";
import { createContext, useContext, useState } from "react";

interface GitHubContextType {
  username: string;
  setUsername: (name: string) => void;
}

const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

export const GitHubProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState("");
  return (
    <GitHubContext.Provider value={{ username, setUsername }}>
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHub = () => {
  const context = useContext(GitHubContext);
  if (!context) throw new Error("useGitHub must be used inside GitHubProvider");
  return context;
};
