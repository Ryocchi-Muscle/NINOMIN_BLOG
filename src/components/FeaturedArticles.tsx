"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { PostMeta } from "@/types/post";
import { Star, ArrowRight } from "lucide-react";

interface FeaturedArticlesProps {
  posts: PostMeta[];
  locale: string;
}

export default function FeaturedArticles({
  posts,
  locale,
}: FeaturedArticlesProps) {
  // 最初の3記事をおすすめとして表示
  const featuredPosts = posts.slice(0, 3);

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
              Featured Articles
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            特におすすめの記事をピックアップしました
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="default" className="mb-2">
                      おすすめ
                    </Badge>
                    <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                  </div>
                  <CardTitle className="text-xl mb-3 text-slate-900 dark:text-slate-50">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group" asChild>
                    <Link href={`/${locale}/posts/${post.slug}`}>
                      続きを読む
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
