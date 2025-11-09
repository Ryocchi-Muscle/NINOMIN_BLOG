"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";

interface ProfileCardProps {
  locale: string;
}

export default function ProfileCard({ locale }: ProfileCardProps) {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-2 border-slate-200 dark:border-slate-700 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-24 w-24 ring-2 ring-slate-200 dark:ring-slate-700">
                <AvatarImage
                  src="/images/profile.jpg"
                  alt="Ryo Ninomiya"
                  className="object-cover scale-150"
                  style={{ objectPosition: "center 30%" }}
                />
                <AvatarFallback className="text-lg bg-gradient-to-br from-sky-400 to-blue-600 text-white">
                  RN
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  About Me
                </CardTitle>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  もっと私について知る
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              フルスタックエンジニアとして、モダンなWeb技術を使った開発を行っています。
              特にNext.js、React、TypeScriptを得意としており、
              ユーザー体験を重視したアプリケーション作りに情熱を注いでいます。
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              このブログでは、技術的な学びや日々の気づきを共有しています。
              同じように技術を学ぶ仲間との交流を大切にしています。
            </p>
            <div className="pt-4">
              <Button className="w-full group" size="lg" asChild>
                <Link href={`/${locale}/about`}>
                  詳しいプロフィールを見る
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
