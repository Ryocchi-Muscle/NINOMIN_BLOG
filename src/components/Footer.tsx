"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Heart } from "lucide-react";

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
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-slate-200 dark:hover:bg-slate-800"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/ryo-ninomiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
                href="https://www.wantedly.com/id/ryo_ninomiya_c"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wantedly"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M19.536 2.368C17.716.896 15.368 0 12.768 0 8.32 0 4.416 2.16 2.24 5.68.064 9.2-.64 13.68.832 17.84c1.504 4.192 4.896 7.36 9.088 8.48 1.184.32 2.4.48 3.616.48 3.136 0 6.112-1.216 8.384-3.424 2.944-2.88 4.448-7.072 4.032-11.2-.384-3.84-2.496-7.232-5.632-9.408zm-6.768 18.88c-5.92 0-10.72-4.8-10.72-10.72S6.848 0 12.768 0s10.72 4.8 10.72 10.72-4.8 10.528-10.72 10.528z" />
                  <path d="M8.56 6.24c-.912 0-1.68.768-1.68 1.68v7.968c0 .912.768 1.68 1.68 1.68.912 0 1.68-.768 1.68-1.68V7.92c0-.912-.768-1.68-1.68-1.68zm8.16 0c-.912 0-1.68.768-1.68 1.68v7.968c0 .912.768 1.68 1.68 1.68.912 0 1.68-.768 1.68-1.68V7.92c0-.912-.768-1.68-1.68-1.68z" />
                </svg>
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
