"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { PostMeta } from "@/types/post";
import { Calendar } from "lucide-react";

interface LatestArticlesProps {
  posts: PostMeta[];
}

export default function LatestArticles({ posts }: LatestArticlesProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-center"
      >
        Latest Articles
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={item}>
            <Link href={`/posts/${post.slug}`}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl mb-3 text-slate-900 dark:text-slate-50 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500 mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    <time>{post.date}</time>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
