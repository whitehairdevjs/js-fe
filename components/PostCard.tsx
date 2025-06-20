"use client";
import { Post } from "@/types/post";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="rounded-2xl shadow-lg p-4 border hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
        자세히 보기 →
      </Link>
    </div>
  );
}