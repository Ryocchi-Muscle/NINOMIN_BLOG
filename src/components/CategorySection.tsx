"use client";

import { motion } from "framer-motion";
import { Calendar, Code, RefreshCw, ArrowRight } from "lucide-react";
import type { PostMeta, PostCategory } from "@/types/post";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface CategorySectionProps {
  category: PostCategory;
  posts: PostMeta[];
  limit?: number;
}

const categoryConfig = {
  weekly: {
    title: "Weekly Reflection",
    subtitle: "週次振り返り",
    description: "毎週の学びと成長の記録",
    icon: Calendar,
    accentColor: "blue",
    gradient: "from-blue-500 via-blue-600 to-indigo-600",
    lightBg: "bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50",
    darkBg:
      "dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30",
    cardBorder: "hover:border-blue-300 dark:hover:border-blue-700",
    tagColor: "text-blue-600 dark:text-blue-400",
  },
  monthly: {
    title: "Monthly Review",
    subtitle: "月次振り返り",
    description: "1ヶ月の総括と目標の振り返り",
    icon: RefreshCw,
    accentColor: "purple",
    gradient: "from-purple-500 via-purple-600 to-pink-600",
    lightBg: "bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50",
    darkBg:
      "dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-purple-950/30",
    cardBorder: "hover:border-purple-300 dark:hover:border-purple-700",
    tagColor: "text-purple-600 dark:text-purple-400",
  },
  tech: {
    title: "Tech Output",
    subtitle: "技術アウトプット",
    description: "技術的な知見や学びの共有",
    icon: Code,
    accentColor: "emerald",
    gradient: "from-emerald-500 via-emerald-600 to-teal-600",
    lightBg: "bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50",
    darkBg:
      "dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/30",
    cardBorder: "hover:border-emerald-300 dark:hover:border-emerald-700",
    tagColor: "text-emerald-600 dark:text-emerald-400",
  },
};

export default function CategorySection({
  category,
  posts,
  limit = 3,
}: CategorySectionProps) {
  const config = categoryConfig[category];
  const Icon = config.icon;
  const displayPosts = posts.slice(0, limit);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 md:py-24 ${config.lightBg} ${config.darkBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {/* アイコン */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className={`p-4 rounded-2xl bg-gradient-to-br ${config.gradient} text-white shadow-lg`}
              >
                <Icon className="w-7 h-7" />
              </motion.div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {config.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  {config.subtitle} — {config.description}
                </p>
              </div>
            </div>

            {posts.length > limit && (
              <motion.a
                href={`/category/${category}`}
                whileHover={{ x: 5 }}
                className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
              >
                すべて見る
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* 記事一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/posts/${post.slug}`}>
                <div
                  className={`h-full p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 ${config.cardBorder}`}
                >
                  {/* 日付とタグ */}
                  <div className="flex items-center justify-between mb-4">
                    <time className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {formatDate(post.date)}
                    </time>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {post.readingTime}
                    </span>
                  </div>

                  {/* タイトル */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* 概要 */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  {/* タグ */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium ${config.tagColor}`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more */}
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      続きを読む
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* モバイル用「すべて見る」 */}
        {posts.length > limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center md:hidden"
          >
            <a
              href={`/category/${category}`}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${config.gradient} text-white font-medium shadow-lg hover:shadow-xl transition-shadow`}
            >
              すべての{config.subtitle}を見る
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
