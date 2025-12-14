"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Play, ExternalLink, BookOpen, Video } from "lucide-react";
import Footer from "@/components/Footer";

// YouTube動画データ
const videos = [
  {
    id: "XmC3t53O-Lo",
    title:
      "20代後半でバックエンドからインフラに興味が湧いた理由とエンジニアとしてのキャリア戦略とは？", // 後で実際のタイトルに変更
    description:
      "所属しているtechbullのシニアSREエンジニアのお二人にキャリアについて相談に乗ってもらった！！",
    tags: ["学習", "技術"],
    category: "Tech",
    addedAt: "2025-11-24",
  },
];

// 他のリソース（書籍、記事など）を追加可能
const resources = [
  {
    type: "book",
    title: "リソースのタイトル例",
    description: "書籍や記事などのリソースを追加できる",
    url: "#",
    tags: ["読書"],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
      >
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="h-4 w-4" />
              ホームに戻る
            </Button>
          </Link>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Resources
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              学習に役立った動画・書籍・記事などをまとめています
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* YouTube Videos Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <Video className="h-8 w-8 text-red-600" />
              おすすめ動画
            </h2>

            <div className="space-y-8">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="overflow-hidden">
                    <div className="md:flex">
                      {/* YouTube Embed */}
                      <div className="md:w-1/2">
                        <div className="relative aspect-video">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="md:w-1/2 p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {video.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                          {video.title}
                        </h3>

                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                          {video.description}
                        </p>

                        <div className="flex items-center gap-4">
                          <Button asChild size="sm" className="gap-2">
                            <a
                              href={`https://youtu.be/${video.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Play className="h-4 w-4" />
                              YouTubeで見る
                            </a>
                          </Button>
                          <span className="text-sm text-slate-500">
                            追加日: {video.addedAt}
                          </span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Resources Section (Optional) */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-sky-600" />
              その他のリソース
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {resource.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                        {resource.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        {resource.description}
                      </p>

                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="gap-2"
                      >
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          詳細を見る
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
