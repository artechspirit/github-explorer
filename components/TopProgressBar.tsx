"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTransition } from "react";

export default function TopProgressBar() {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    startTransition(() => {
      // hanya trigger transition, kosong saja
    });
  }, [pathname, startTransition]);

  useEffect(() => {
    let timer1: NodeJS.Timeout | undefined;
    let timer2: NodeJS.Timeout | undefined;

    if (isPending) {
      setIsAnimating(true);
      setProgress(0);

      let currentProgress = 0;
      timer1 = setInterval(() => {
        currentProgress += Math.random() * 10 + 5; // tambah 5-15%
        if (currentProgress < 90) {
          setProgress(currentProgress);
        } else if (timer1) {
          clearInterval(timer1);
        }
      }, 200);
    } else if (isAnimating) {
      if (timer1) clearInterval(timer1);
      setProgress(100);
      timer2 = setTimeout(() => {
        setIsAnimating(false);
        setProgress(0);
      }, 300);
    }

    return () => {
      if (timer1) clearInterval(timer1);
      if (timer2) clearTimeout(timer2);
    };
  }, [isPending, isAnimating]);

  if (!isAnimating) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 h-0.5 bg-blue-600 z-50 transition-all ease-linear"
      style={{ width: `${progress}%` }}
    />
  );
}
