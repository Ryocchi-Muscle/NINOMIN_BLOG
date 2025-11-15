"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Calendar,
  Code2,
  Briefcase,
  GraduationCap,
  Heart,
  ArrowLeft,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const skills = {
    backend: ["Python", "Node.js", "Flask", "Express", "FastAPI"],
    cloud: ["AWS", "Amplify", "Route 53", "CloudFront", "S3"],
    devops: ["Docker", "Git", "GitHub Actions", "CI/CD"],
    frontend: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  };

  const timeline = [
    {
      year: "2025",
      title: "SRE / バックエンドエンジニアを目指す",
      description:
        "インフラ自動化、CI/CD、システムの信頼性向上に注力。バックエンド開発とDevOpsの実践的なスキルを習得中",
    },
    {
      year: "2024",
      title: "個人開発とインフラ学習",
      description:
        "Next.jsを使ったブログシステムの構築とAWS Amplifyへのデプロイ。クラウドインフラストラクチャの実践",
    },
    {
      year: "2023",
      title: "Web開発の基礎学習",
      description: "モダンなフロントエンド技術とバックエンド開発の学習開始",
    },
  ];

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

          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Avatar className="h-48 w-48 ring-4 ring-slate-300 dark:ring-slate-600 shadow-xl">
                <AvatarImage
                  src="/images/profile.jpg"
                  alt="Ryo Ninomiya"
                  className="object-cover scale-150"
                  style={{ objectPosition: "center 30%" }}
                />
                <AvatarFallback className="text-4xl bg-gradient-to-br from-sky-400 to-blue-600 text-white">
                  RN
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                Ryo Ninomiya
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                Backend Engineer
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Tokyo, Japan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>株式会社 TOUCH TO GO</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2024年より個人開発</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Me Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <Code2 className="h-8 w-8 text-sky-600" />
              About Me
            </h2>

            <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p className="text-lg">
                こんにちは、Ryo Ninomiyaです。
                現在、SREおよびバックエンドエンジニアを志望し、
                信頼性の高いシステム構築とインフラストラクチャの自動化について学んでいます。
              </p>

              <p>
                PythonやNode.jsを使ったバックエンド開発を中心に学習を進めており、
                将来的にはシステムの可用性、スケーラビリティ、パフォーマンスを最適化する
                SREとしてのキャリアを築くことを目標としています。
              </p>

              <p>
                AWS Amplifyを使ったデプロイ、Route 53でのドメイン管理、
                CloudFrontを使ったCDN配信など、クラウドインフラストラクチャの実践的な経験を積みながら、
                DevOpsやCI/CDパイプラインの構築についても学びを深めています。
              </p>

              <p>
                フロントエンド開発の知識も活かしながら、
                ユーザーに安定したサービスを提供できるエンジニアを目指して日々成長中です。
              </p>

              <Card className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
                        このブログについて
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        技術的な学びや日々の気づきを記録し、共有する場として運営しています。
                        同じように技術を学ぶ仲間との交流を大切にし、
                        お互いに成長できるコミュニティを目指しています。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-sky-600" />
              Skills & Technologies
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4 capitalize">
                        {category === "backend" && "Backend & API"}
                        {category === "cloud" && "Cloud & Infrastructure"}
                        {category === "devops" && "DevOps & Tools"}
                        {category === "frontend" && "Frontend"}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-sky-600" />
              Journey
            </h2>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold shadow-lg">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-700 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Mail className="h-12 w-12 text-sky-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              技術的な質問や協力のご提案など、お気軽にご連絡ください。
              SNSでもフォローお待ちしています！
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a
                  href="https://github.com/Ryocchi-Muscle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a
                  href="https://x.com/ninomin_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X (Twitter)
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
