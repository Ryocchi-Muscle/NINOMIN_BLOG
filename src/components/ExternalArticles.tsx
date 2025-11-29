"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Newspaper, Sparkles } from "lucide-react";
import type { PostMeta } from "@/types/post";

interface ExternalArticlesProps {
  articles: PostMeta[];
}

// プラットフォーム名からサイトURLを取得
function getPlatformUrl(platform: string | undefined): string | null {
  const platformUrls: Record<string, string> = {
    TechBull: "https://techbull.cloud/",
  };
  return platform ? platformUrls[platform] || null : null;
}

export default function ExternalArticles({ articles }: ExternalArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Newspaper className="h-6 w-6 text-indigo-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
              External Publications
            </h2>
            <Sparkles className="h-5 w-5 text-amber-500" />
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            外部メディアでの執筆記事・寄稿
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-2 border-indigo-200 dark:border-indigo-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
                <div className="flex flex-col md:flex-row">
                  {/* Left Accent */}
                  <div className="hidden md:block w-2 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

                  <div className="flex-1 p-6 md:p-8">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <a
                          href={getPlatformUrl(article.platform) || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-opacity"
                        >
                          <Badge
                            variant="outline"
                            className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700 cursor-pointer"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            {article.platform}
                          </Badge>
                        </a>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {new Date(article.date).toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <CardTitle className="text-xl md:text-2xl mb-4 text-slate-900 dark:text-slate-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs bg-slate-100 dark:bg-slate-700"
                            >
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          variant="default"
                          className="group/btn bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                          asChild
                        >
                          <a
                            href={article.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            記事を読む
                            <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
