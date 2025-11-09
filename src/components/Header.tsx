"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("navigation");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* ロゴ */}
        <Link
          href={`/${locale}`}
          className="text-xl font-bold text-slate-900 dark:text-slate-100"
        >
          NINOMIN BLOG
        </Link>

        {/* ナビゲーション - 各ページ実装後に有効化 */}
        {/* <nav className="flex items-center gap-6">
          <Link
            href={`/${locale}`}
            className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
          >
            {t("home")}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
          >
            {t("blog")}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
          >
            {t("about")}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
          >
            {t("contact")}
          </Link>

          <LanguageSwitcher />
        </nav> */}
      </div>
    </header>
  );
}
