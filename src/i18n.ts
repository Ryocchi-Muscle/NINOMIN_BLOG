import { getRequestConfig } from "next-intl/server";
import jaMessages from "../messages/ja.json";
import enMessages from "../messages/en.json";
import deMessages from "../messages/de.json";

// 利用可能な言語
export const locales = ["ja", "en", "de"] as const;
export const defaultLocale = "ja" as const;

export type Locale = (typeof locales)[number];

const messages = {
  ja: jaMessages,
  en: enMessages,
  de: deMessages,
};

export default getRequestConfig(async ({ requestLocale }) => {
  // Request the locale that the user is requesting
  let locale = await requestLocale;

  // 有効な言語かチェック
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as Locale],
  };
});
