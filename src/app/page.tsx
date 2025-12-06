import HeroSection from "@/components/HeroSection";
import ExternalArticles from "@/components/ExternalArticles";
import PostFilter from "@/components/PostFilter";
import ProfileCard from "@/components/ProfileCard";
import Footer from "@/components/Footer";
import { getExternalPosts, getInternalPosts } from "@/lib/posts";

export default function Home() {
  const externalPosts = getExternalPosts();
  const internalPosts = getInternalPosts();

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <HeroSection />

      {/* タブ切り替え記事一覧 */}
      <PostFilter posts={internalPosts} />

      {/* External Publications */}
      <ExternalArticles articles={externalPosts} />

      {/* Profile Card */}
      <ProfileCard />

      {/* Footer */}
      <Footer />
    </main>
  );
}
