"use client";

import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();

  const handleStory = () => {
    const password = prompt("Enter your password");

    if (!password) return;

    if (password === "1234") {
      router.push("/dashboard");
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <section className="hero rounded-3xl bg-linear-to-r from-primary to-secondary py-20">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-black">Dev Story</span>
          </h1>

          <p className="mt-6 text-lg">
            Share your journey, inspire other developers, and discover stories
            from the tech community.
          </p>

          <button onClick={handleStory} className="btn btn-primary mt-8">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
}
