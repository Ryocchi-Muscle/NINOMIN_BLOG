import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/utils";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "記事が見つかりません",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <article className="mx-auto max-w-3xl px-6 py-12">
        {/* ヘッダー */}
        <header className="mb-8">
          <Link
            href="/"
            className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
          >
            ← ホームに戻る
          </Link>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 dark:text-slate-100">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <time>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="mt-4 flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sky-100 dark:bg-sky-900 px-3 py-1 text-sm text-sky-700 dark:text-sky-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* 記事本文 */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
