"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className="border rounded-md w-6 h-6 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <Image
        src="/sun.svg"
        alt=""
        width={16}
        height={16}
        className="hidden dark:block"
      />
      <Image
        src="/moon.svg"
        alt=""
        width={16}
        height={16}
        className="dark:hidden"
      />
    </button>
  );
}
