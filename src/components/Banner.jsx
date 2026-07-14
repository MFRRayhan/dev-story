"use client";

import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();

  const handleStory = () => {
    const password = prompt("Enter your password");

    if (password === "1234") {
      router.push("/dashboard");
    }
  };

  return (
    <div className="bg-linear-60 from-sky-50 to-sky-400 p-10 rounded text-black space-y-5 text-center">
      <h2 className="text-5xl">Welcome to dev story</h2>
      <button onClick={handleStory} className="btn btn-primary">
        Share Story
      </button>
    </div>
  );
}
