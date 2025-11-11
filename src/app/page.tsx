import HeroSection from "@/components/HeroSection";
import LatestArticles from "@/components/LatestArticles";
import FeaturedArticles from "@/components/FeaturedArticles";
import TagFilter from "@/components/TagFilter";
import ProfileCard from "@/components/ProfileCard";
import Footer from "@/components/Footer";
import { getAllPosts, getAllTags } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Articles */}
      <FeaturedArticles posts={posts} />

      {/* Tag Filter */}
      <TagFilter tags={tags} />

      {/* Latest Articles */}
      <LatestArticles posts={posts} />

      {/* Profile Card */}
      <ProfileCard />

      {/* Footer */}
      <Footer />
    </main>
  );
}
