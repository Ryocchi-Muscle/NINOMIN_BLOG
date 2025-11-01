import Link from "next/link";
import Hero from "../components/Hero";
import PostCard from "../components/PostCard";
import TagList from "../components/TagList";
import Footer from "../components/Footer";
import type { PostMeta } from "../types/post";

const DUMMY_POSTS: PostMeta[] = [
  {
    slug: "getting-started",
    title: "Getting started with my toolkit",
    date: "2025-10-01",
    excerpt: "A quick tour of the tools and workflow I use daily.",
    tags: ["workflow", "tools"],
    readingTime: "4 min",
    published: true,
  },
  {
    slug: "tailwind-tips",
    title: "Tailwind CSS tips for clean UI",
    date: "2025-09-12",
    excerpt: "Practical Tailwind techniques to keep your UI tidy and fast.",
    tags: ["tailwind", "css"],
    readingTime: "6 min",
    published: true,
  },
  {
    slug: "mdx-workflow",
    title: "MDX workflow for blogging",
    date: "2025-08-20",
    excerpt: "How I write posts with MDX and keep content modular.",
    tags: ["mdx", "content"],
    readingTime: "5 min",
    published: true,
  },
];

const TAGS = ["workflow", "tools", "tailwind", "mdx", "content"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Hero />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section>
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
            Latest Posts
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {DUMMY_POSTS.map((p) => (
              <Link key={p.slug} href={`/posts/${p.slug}`}>
                <PostCard post={p} />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <TagList tags={TAGS} />
        </section>

        <Footer />
      </div>
    </main>
  );
}
