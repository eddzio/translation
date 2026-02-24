"use client"

import { Translation } from "./components/translation";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 bg-[background-color:var(--background)] font-[family-name:var(--font-geist-sans)]">
      <Translation />
    </main>
  );
}
