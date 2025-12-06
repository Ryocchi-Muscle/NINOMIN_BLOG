import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind CSSのクラス名を結合するユーティリティ関数
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 日付を日本語形式にフォーマットする関数
export function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("ja-JP", options);
}
