"use client";

import { Button } from "@/components/ui/button";
import { Github, BookOpen, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* SNSリンク */}
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-slate-200 dark:hover:bg-slate-800"
              asChild
            >
              <a
                href="https://github.com/Ryocchi-Muscle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-slate-200 dark:hover:bg-slate-800"
              asChild
            >
              <a
                href="https://x.com/ninomin_tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-slate-200 dark:hover:bg-slate-800"
              asChild
            >
              <a
                href="https://qiita.com/Ninomin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Qiita"
              >
                <BookOpen className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* 著作権表記 */}
          <div className="text-center md:text-right">
            <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              © 2025 Ryo Ninomiya. Built with
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              and Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
