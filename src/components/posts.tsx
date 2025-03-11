import React from "react";
import { posts } from "@/contents/posts";
import { Button } from "./ui/button";
import Link from "next/link";
import { CalendarIcon, HeartIcon } from "lucide-react";

export default function Posts() {
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="flex flex-col items-start gap-6 pb-10 w-full max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tighter">Recent Posts</h1>
      <div className="grid gap-6 w-full">
        {recentPosts.map((post, index) => (
          <div
            key={index}
            className="group border rounded-lg p-6 w-full bg-white dark:bg-gray-900 transition-all hover:border-primary"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h2>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <CalendarIcon className="w-4 h-4" />
                <span>{post.publishedAt}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
              {post.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <Button asChild variant="ghost" className="p-0 h-auto hover:bg-transparent">
                <Link href={post.content}>Read More →</Link>
              </Button>
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                <HeartIcon className="w-4 h-4" />
                <span>{post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button asChild variant="outline" className="mx-auto mt-4">
        <Link href="/posts">View All Posts</Link>
      </Button>
    </section>
  );
}
