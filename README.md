#  Personal Blog – Ryo Ninomiya

## 概要
個人の学びや経験を発信するための技術ブログ。
Markdownで記事を管理し、タグで分類。
AWSを利用したデプロイとインフラ構築の学習を目的とする。

---

## スタック
| 分類 | 技術 | 用途 |
|------|------|------|
| フロントエンド | Next.js 14 | ブログ表示、SSG構成 |
| バックエンド | Hono.js | APIサーバ（拡張予定） |RE
| スタイリング | Tailwind CSS / shadcn/ui | UI構築 |
| 記事管理 | gray-matter / remark | Markdown解析 |
| デプロイ | Vercel → AWS Amplify | 初期デプロイ・移行学習 |
| CI/CD | GitHub Actions | 自動ビルド・デプロイ（Step2） |

---

## 開発計画
| フェーズ | 内容 | 目的 |
|-----------|------|------|
| Step1 | Next.js + Markdownでブログ基盤構築 | 公開・LT発表に向けたMVP完成 |
| Step1 | Vercelで初期デプロイ | 公開用URL発行 |
| Step1 | AWS Amplifyへ移行 | AWS実践と学習 |
| Step2 | Hono.jsでAPI実装 | 記事検索・ログ管理など |
| Step2 | GitHub Actions導入 | CI/CD構築 |

---

## 機能
- Markdown記事の自動ビルド・表示
- タグによる記事分類
- レスポンシブ対応
- 公開範囲：全ユーザー閲覧可
- シンプルかつ個人ブランドを重視したUI
