import Link from "next/link";
import type { PostMeta } from "../types/post";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      aria-label={`Read more about ${post.title}`}
    >
      <article className="rounded-lg border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-800">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
          {post.title}
        </h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <time>{post.date}</time>
          <div className="flex gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-sky-600">
                #{t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
