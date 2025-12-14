import Link from "next/link";
import { User, Video } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* ロゴ */}
        <Link
          href="/"
          className="text-xl font-bold text-slate-900 dark:text-slate-100"
        >
          NINOMIN BLOG
        </Link>

        {/* ナビゲーション */}
        <nav className="flex items-center gap-1">
          <Link
            href="/about"
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-700 rounded-md transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            <User className="h-4 w-4" />
            About
          </Link>
          <Link
            href="/resources"
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-700 rounded-md transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            <Video className="h-4 w-4" />
            Resources
          </Link>
        </nav>
      </div>
    </header>
  );
}
