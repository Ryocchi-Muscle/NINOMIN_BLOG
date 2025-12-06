"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Code,
  Calendar,
  RefreshCw,
  ArrowRight,
  Clock,
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

// タブの設定
const tabs: {
  id: TabCategory;
  label: string;
  icon: typeof Layers;
  gradient: string;
  activeGradient: string;
}[] = [
  {
    id: "all",
    label: "All",
    icon: Layers,
    gradient: "from-slate-500 to-slate-600",
    activeGradient: "from-slate-600 to-slate-800",
  },
  {
    id: "tech",
    label: "Tech",
    icon: Code,
    gradient: "from-emerald-500 to-teal-500",
    activeGradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "weekly",
    label: "Weekly",
    icon: Calendar,
    gradient: "from-blue-500 to-indigo-500",
    activeGradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "monthly",
    label: "Monthly",
    icon: RefreshCw,
    gradient: "from-purple-500 to-pink-500",
    activeGradient: "from-purple-500 to-pink-600",
  },
];

// カテゴリーごとのカード設定
const categoryCardStyles: Record<
  PostCategory,
  { border: string; tag: string; hover: string }
> = {
  tech: {
    border: "border-emerald-200 dark:border-emerald-800",
    tag: "text-emerald-600 dark:text-emerald-400",
    hover: "hover:border-emerald-400 dark:hover:border-emerald-600",
  },
  weekly: {
    border: "border-blue-200 dark:border-blue-800",
    tag: "text-blue-600 dark:text-blue-400",
    hover: "hover:border-blue-400 dark:hover:border-blue-600",
  },
  monthly: {
    border: "border-purple-200 dark:border-purple-800",
    tag: "text-purple-600 dark:text-purple-400",
    hover: "hover:border-purple-400 dark:hover:border-purple-600",
  },
};

// カテゴリーラベル
const categoryLabels: Record<PostCategory, string> = {
  tech: "Tech",
  weekly: "Weekly",
  monthly: "Monthly",
};

export default function PostFilter({
  posts,
  initialCategory = "all",
}: PostFilterProps) {
  const [activeTab, setActiveTab] = useState<TabCategory>(initialCategory);

  // フィルタリングされた記事
  const filteredPosts = useMemo(() => {
    if (activeTab === "all") {
      return posts;
    }
    return posts.filter((post) => post.category === activeTab);
  }, [posts, activeTab]);

  // 各カテゴリーの記事数を計算
  const categoryCounts = useMemo(() => {
    const counts: Record<TabCategory, number> = {
      all: posts.length,
      tech: posts.filter((p) => p.category === "tech").length,
      weekly: posts.filter((p) => p.category === "weekly").length,
      monthly: posts.filter((p) => p.category === "monthly").length,
    };
    return counts;
  }, [posts]);

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
            技術的なアウトプットや振り返りログをカテゴリ別に閲覧できます
          </p>
        </motion.div>

        {/* タブナビゲーション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const count = categoryCounts[tab.id];

            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm
                  transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? `bg-gradient-to-r ${tab.activeGradient} text-white shadow-lg`
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span
                  className={`
                    ml-1 px-2 py-0.5 text-xs rounded-full
                    ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                    }
                  `}
                >
                  {count}
                </span>

                {/* アクティブインジケーター */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* 記事一覧 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => {
                const cardStyle = post.category
                  ? categoryCardStyles[post.category]
                  : categoryCardStyles.tech;

                return (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Link href={`/posts/${post.slug}`}>
                      <div
                        className={`
                          h-full p-6 rounded-2xl border-2
                          bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm
                          shadow-sm hover:shadow-xl transition-all duration-300
                          ${cardStyle.border} ${cardStyle.hover}
                        `}
                      >
                        {/* カテゴリーバッジと日付 */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            {post.category && (
                              <span
                                className={`
                                  text-xs font-bold px-2.5 py-1 rounded-full
                                  bg-slate-100 dark:bg-slate-700 ${cardStyle.tag}
                                `}
                              >
                                {categoryLabels[post.category]}
                              </span>
                            )}
                          </div>
                          <time className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                            {formatDate(post.date)}
                          </time>
                        </div>

                        {/* タイトル */}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>

                        {/* 概要 */}
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>

                        {/* タグと読了時間 */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs text-slate-500 dark:text-slate-400"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                            <Clock className="w-3 h-3" />
                            <span>{post.readingTime}</span>
                          </div>
                        </div>

                        {/* Read more */}
                        <div className="mt-4">
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
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
                className="col-span-full text-center py-16"
              >
                <div className="text-slate-400 dark:text-slate-500 mb-4">
                  <Layers className="w-16 h-16 mx-auto opacity-50" />
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  このカテゴリーの記事はまだありません
                </p>
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
            {activeTab !== "all" &&
              ` (${tabs.find((t) => t.id === activeTab)?.label})`}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
