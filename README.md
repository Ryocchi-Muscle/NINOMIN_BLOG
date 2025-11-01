# Personal Blog – Ryo Ninomiya

## 概要

個人の学びや経験を発信するための技術ブログ。
Markdown で記事を管理し、タグで分類。
AWS を利用したデプロイとインフラ構築の学習を目的とする。

--- READ

## スタック

| 分類           | 技術                     | 用途                          |
| -------------- | ------------------------ | ----------------------------- |
| フロントエンド | Next.js 14               | ブログ表示、SSG 構成          |
| バックエンド   | Hono.js                  | API サーバ（拡張予定）        |
| スタイリング   | Tailwind CSS / shadcn/ui | UI 構築                       |
| 記事管理       | gray-matter / remark     | Markdown 解析                 |
| デプロイ       | Vercel → AWS Amplify     | 初期デプロイ・移行学習        |
| CI/CD          | GitHub Actions           | 自動ビルド・デプロイ（Step2） |

---

## 開発計画

| フェーズ | 内容                                | 目的                           |
| -------- | ----------------------------------- | ------------------------------ |
| Step1    | Next.js + Markdown でブログ基盤構築 | 公開・LT 発表に向けた MVP 完成 |
| Step1    | Vercel で初期デプロイ               | 公開用 URL 発行                |
| Step1    | AWS Amplify へ移行                  | AWS 実践と学習                 |
| Step2    | Hono.js で API 実装                 | 記事検索・ログ管理など         |
| Step2    | GitHub Actions 導入                 | CI/CD 構築                     |

---

## 機能

- Markdown 記事の自動ビルド・表示
- タグによる記事分類
- レスポンシブ対応
- 公開範囲：全ユーザー閲覧可
- シンプルかつ個人ブランドを重視した UI
