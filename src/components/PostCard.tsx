import Link from "next/link";
import type { PostMeta } from "../types/post";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="block focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded-lg"
      aria-label={`Read article: ${post.title}`}
    >
      <article className="rounded-lg border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-800 h-full">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
          {post.title}
        </h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <time dateTime={post.date}>{post.date}</time>
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
