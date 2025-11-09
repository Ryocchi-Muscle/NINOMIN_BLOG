import { getRequestConfig } from "next-intl/server";

// 利用可能な言語
export const locales = ["ja", "en", "de"] as const;
export const defaultLocale = "ja" as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // Request the locale that the user is requesting
  let locale = await requestLocale;

  // 有効な言語かチェック
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
