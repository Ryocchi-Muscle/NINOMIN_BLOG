import Hero from "../components/Hero";
import PostCard from "../components/PostCard";
import TagList from "../components/TagList";
import Footer from "../components/Footer";
import { getAllPosts, getAllTags } from "../lib/utils";

export default function Home() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Hero />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section>
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
            Latest Posts
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <TagList tags={tags} />
        </section>

        <Footer />
      </div>
    </main>
  );
}
