"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Calendar,
  RefreshCw,
  ArrowRight,
  Clock,
  Star,
  Search,
  Tag,
  Hash,
} from "lucide-react";
import type { PostMeta, PostCategory } from "@/types/post";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

// タブのカテゴリータイプ（Allを追加）
type TabCategory = "all" | PostCategory;

interface PostFilterProps {
  posts: PostMeta[];
  initialCategory?: TabCategory;
}

// カテゴリーの設定
const categories: {
  id: TabCategory;
  label: string;
  icon: typeof Layers;
}[] = [
  { id: "all", label: "All", icon: Layers },
  { id: "weekly", label: "Weekly", icon: Calendar },
  { id: "monthly", label: "Monthly", icon: RefreshCw },
  { id: "annual", label: "Annual", icon: Star },
];

// カテゴリーごとのカード設定
const categoryCardStyles: Record<
  PostCategory,
  { border: string; tag: string; tagBg: string }
> = {
  weekly: {
    border: "border-l-blue-500",
    tag: "text-blue-600 dark:text-blue-400",
    tagBg: "bg-blue-500/10",
  },
  monthly: {
    border: "border-l-purple-500",
    tag: "text-purple-600 dark:text-purple-400",
    tagBg: "bg-purple-500/10",
  },
  annual: {
    border: "border-l-amber-500",
    tag: "text-amber-600 dark:text-amber-400",
    tagBg: "bg-amber-500/10",
  },
};

// カテゴリーラベル
const categoryLabels: Record<PostCategory, string> = {
  weekly: "Weekly",
  monthly: "Monthly",
  annual: "Annual",
};

export default function PostFilter({
  posts,
  initialCategory = "all",
}: PostFilterProps) {
  const [activeCategory, setActiveCategory] =
    useState<TabCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 全タグを抽出（重複排除・ソート）
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [posts]);

  // フィルタリングされた記事
  const filteredPosts = useMemo(() => {
    let result = posts;

    // カテゴリーフィルター
    if (activeCategory !== "all") {
      result = result.filter((post) => post.category === activeCategory);
    }

    // タグフィルター
    if (selectedTag) {
      result = result.filter((post) => post.tags.includes(selectedTag));
    }

    // 検索フィルター
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [posts, activeCategory, selectedTag, searchQuery]);

  // 各カテゴリーの記事数を計算
  const categoryCounts = useMemo(() => {
    const counts: Record<TabCategory, number> = {
      all: posts.length,
      weekly: posts.filter((p) => p.category === "weekly").length,
      monthly: posts.filter((p) => p.category === "monthly").length,
      annual: posts.filter((p) => p.category === "annual").length,
    };
    return counts;
  }, [posts]);

  // タグの使用回数を計算
  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return counts;
  }, [posts]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const clearFilters = () => {
    setActiveCategory("all");
    setSelectedTag(null);
    setSearchQuery("");
  };

  const hasActiveFilters =
    activeCategory !== "all" || selectedTag !== null || searchQuery.trim();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Articles
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            日々の振り返りログをカテゴリ別に閲覧できます
          </p>
        </motion.div>

        {/* メインコンテンツ: 記事一覧 + サイドバー */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 記事一覧（左側） */}
          <div className="flex-1 min-w-0">
            {/* 検索バー（モバイル表示） */}
            <div className="lg:hidden mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="記事を検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
            </div>

            {/* フィルター状態表示 */}
            {hasActiveFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mb-6 flex items-center gap-2 flex-wrap"
              >
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  フィルター:
                </span>
                {activeCategory !== "all" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm">
                    {categoryLabels[activeCategory as PostCategory]}
                  </span>
                )}
                {selectedTag && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm">
                    #{selectedTag}
                  </span>
                )}
                {searchQuery.trim() && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm">
                    「{searchQuery}」
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 underline ml-2"
                >
                  クリア
                </button>
              </motion.div>
            )}

            {/* 記事一覧 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${selectedTag}-${searchQuery}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => {
                    const cardStyle = post.category
                      ? categoryCardStyles[post.category]
                      : categoryCardStyles.weekly;

                    return (
                      <motion.article
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        className="group"
                      >
                        <Link href={`/posts/${post.slug}`}>
                          <div
                            className={`
                              p-5 rounded-xl border-l-4 ${cardStyle.border}
                              bg-white dark:bg-slate-800/80
                              border border-slate-200 dark:border-slate-700
                              hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600
                              transition-all duration-200
                            `}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                              {/* 左側: タイトルとメタ情報 */}
                              <div className="flex-1 min-w-0">
                                {/* カテゴリーバッジ */}
                                {post.category && (
                                  <span
                                    className={`
                                      inline-block text-xs font-semibold px-2 py-0.5 rounded mb-2
                                      ${cardStyle.tagBg} ${cardStyle.tag}
                                    `}
                                  >
                                    {categoryLabels[post.category]}
                                  </span>
                                )}

                                {/* タイトル */}
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                  {post.title}
                                </h3>

                                {/* 概要 */}
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                                  {post.excerpt}
                                </p>

                                {/* タグ */}
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {post.tags.slice(0, 4).map((tag) => (
                                    <span
                                      key={tag}
                                      className="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400"
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* 右側: 日付と読了時間 */}
                              <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 text-sm text-slate-500 dark:text-slate-400 shrink-0">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <time>{formatDate(post.date)}</time>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{post.readingTime}</span>
                                </div>
                              </div>
                            </div>

                            {/* Read more */}
                            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                続きを読む
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    );
                  })
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                  >
                    <div className="text-slate-400 dark:text-slate-500 mb-4">
                      <Search className="w-16 h-16 mx-auto opacity-50" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                      該当する記事が見つかりませんでした
                    </p>
                    {hasActiveFilters && (
                      <button
                        onClick={clearFilters}
                        className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        フィルターをクリア
                      </button>
                    )}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* 記事数表示 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {filteredPosts.length}件の記事を表示中
                {hasActiveFilters && ` / 全${posts.length}件`}
              </p>
            </motion.div>
          </div>

          {/* サイドバー（右側） */}
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* 検索バー（デスクトップ） */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="記事を検索..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                </div>
              </motion.div>

              {/* カテゴリーフィルター */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Hash className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    カテゴリ
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    const count = categoryCounts[cat.id];

                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`
                          px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                          ${
                            isActive
                              ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                              : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                          }
                        `}
                      >
                        {cat.label}
                        <span
                          className={`ml-1.5 ${isActive ? "opacity-70" : "opacity-50"}`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* タグフィルター */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    タグ
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => {
                    const isSelected = selectedTag === tag;

                    return (
                      <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`
                          px-3 py-1.5 rounded-lg text-sm transition-all
                          ${
                            isSelected
                              ? "bg-blue-500 text-white"
                              : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                          }
                        `}
                      >
                        {tag}
                        <span
                          className={`ml-1 text-xs ${isSelected ? "opacity-70" : "opacity-50"}`}
                        >
                          {tagCounts[tag]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
