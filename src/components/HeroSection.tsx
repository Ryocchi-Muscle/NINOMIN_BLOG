"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-20"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Avatar className="h-40 w-40 mb-8 ring-4 ring-slate-200 dark:ring-slate-700">
          <AvatarImage
            src="/images/profile.jpg"
            alt="Ryo Ninomiya"
            className="object-cover scale-150"
            style={{ objectPosition: "center 30%" }}
          />
          <AvatarFallback className="text-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-white">
            RN
          </AvatarFallback>
        </Avatar>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-center"
      >
        Ryo Ninomiya
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 text-center max-w-2xl leading-relaxed"
      >
        フルスタックエンジニアとして、Web開発とクラウドアーキテクチャに情熱を注いでいます。
        <br />
        日々の学びと技術的な発見を、ここで共有しています。
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <Button variant="outline" size="lg" className="gap-2" asChild>
          <a
            href="https://github.com/Ryocchi-Muscle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
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
            X
          </a>
        </Button>

        <Button variant="outline" size="lg" className="gap-2" asChild>
          <a
            href="https://qiita.com/Ninomin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen className="h-5 w-5" />
            Qiita
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
}
