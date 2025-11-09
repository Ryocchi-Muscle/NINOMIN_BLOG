import { locales } from "@/i18n";
import HeroSection from "@/components/HeroSection";
import LatestArticles from "@/components/LatestArticles";
import FeaturedArticles from "@/components/FeaturedArticles";
import TagFilter from "@/components/TagFilter";
import ProfileCard from "@/components/ProfileCard";
import Footer from "@/components/Footer";
import { getAllPosts, getAllTags } from "@/lib/posts";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Articles */}
      <FeaturedArticles posts={posts} locale={locale} />

      {/* Tag Filter */}
      <TagFilter tags={tags} />

      {/* Latest Articles */}
      <LatestArticles posts={posts} locale={locale} />

      {/* Profile Card */}
      <ProfileCard locale={locale} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
