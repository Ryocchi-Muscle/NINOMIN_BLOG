import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./src/i18n";

export default createMiddleware({
  // サポートする言語のリスト
  locales,

  // デフォルト言語
  defaultLocale,

  // ロケールプレフィックスを常に表示
  localePrefix: "always",
});

export const config = {
  // 国際化ルーティングを適用するパス
  // 静的ファイルとAPI routesを除外
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
