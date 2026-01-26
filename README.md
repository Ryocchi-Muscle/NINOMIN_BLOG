# Personal Tech Blog – DevOps Portfolio

[![CI](https://github.com/Ryocchi-Muscle/NINOMIN_BLOG/actions/workflows/ci.yml/badge.svg)](https://github.com/Ryocchi-Muscle/NINOMIN_BLOG/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)

## 概要

個人の技術的な学びと実践を発信するブログプラットフォーム。
**モダンなDevOps実践と継続的な改善**を重視し、インフラのコード化、自動化、品質管理の取り組みを実装。

### プロジェクトの目的

- モダンなフロントエンド技術とAWSを活用したブログシステムの構築
- CI/CDパイプラインの実装と自動化の推進
- インフラのコード化とベストプラクティスの実践
- コード品質とパフォーマンスの継続的な改善

---

## 技術スタック

### フロントエンド

| 技術                  | バージョン | 用途                               |
| --------------------- | ---------- | ---------------------------------- |
| Next.js               | 16.0       | SSG/SSR、ルーティング              |
| React                 | 19.2       | UI構築                             |
| TypeScript            | 5.6        | 型安全性の確保                     |
| Tailwind CSS          | 3.4        | スタイリング                       |
| shadcn/ui             | Latest     | UIコンポーネントライブラリ         |
| Framer Motion         | 12.23      | アニメーション                     |
| next-mdx-remote       | 5.0        | MDX記事のレンダリング              |
| gray-matter           | 4.0        | フロントマター解析                 |
| remark/rehype         | Latest     | Markdown処理、シンタックスハイライト |

### 開発ツール・品質管理

| 技術                       | バージョン | 用途                          |
| -------------------------- | ---------- | ----------------------------- |
| ESLint                     | 9.39       | 静的解析（Flat Config採用）   |
| TypeScript Compiler        | 5.6        | 型チェック                    |
| pnpm                       | 9.x        | 高速なパッケージマネージャー  |

### インフラ・デプロイ

| 技術             | 用途                                    |
| ---------------- | --------------------------------------- |
| AWS Amplify      | ホスティング、継続的デプロイ            |
| GitHub Actions   | CI/CDパイプライン                        |
| Git (GitHub)     | バージョン管理、ブランチ戦略            |

---

## インフラ構成

### AWS Amplify

```yaml
# amplify.yml - インフラのコード化
version: 1
frontend:
  phases:
    preBuild:
      - Node.js 22 環境のセットアップ (nvm)
      - pnpm グローバルインストール
      - 依存関係のインストール
    build:
      - Next.js ビルド実行
  artifacts:
    - .next ディレクトリ配信
  cache:
    - .next/cache (ビルドキャッシュ)
    - node_modules (依存関係)
    - .pnpm-store (pnpmストア)
```

### キャッシュ戦略

- **Next.js ビルドキャッシュ**: ビルド時間の短縮
- **pnpmストアキャッシュ**: 依存関係インストール時間の削減
- **node_modulesキャッシュ**: 再利用による高速化

---

## CI/CDパイプライン

### GitHub Actions ワークフロー

```yaml
trigger:
  - push: main, feature/* ブランチ
  - pull_request: main への PR

jobs:
  1. コードチェックアウト
  2. pnpm セットアップ (v9)
  3. Node.js 20 セットアップ + キャッシュ
  4. 依存関係インストール (frozen-lockfile)
  5. 型チェック (tsc --noEmit)
  6. Lint (ESLint 9 + Flat Config)
  7. ビルド検証 (next build)
```

### 品質ゲート

- ✅ **型安全性**: TypeScript strict mode
- ✅ **コード品質**: ESLint 9.39 + Flat Config
- ✅ **ビルド検証**: 本番ビルドの成功確認
- ✅ **依存関係の固定**: pnpm frozen-lockfile

---

## 開発フロー

### ブランチ戦略

```
main ← feature/* ← 開発
  ↓
  AWS Amplify (自動デプロイ)
```

- `main`: 本番環境、保護されたブランチ
- `feature/*`: 機能開発ブランチ
- PR時に自動CI実行、全チェック通過後にマージ

### 開発プロセス

1. `feature/*` ブランチで開発
2. GitHub Actions で自動チェック (型チェック、Lint、ビルド)
3. PR作成・レビュー
4. `main` にマージ
5. AWS Amplify が自動デプロイ

---

## コード品質管理

### ESLint 9 + Flat Config

2025年1月にESLint 9へ移行。従来の`.eslintrc`から`eslint.config.mjs`へ移行し、よりモダンな設定管理を実現。

**導入プラグイン:**
- `@typescript-eslint/*`: TypeScript対応
- `@next/eslint-plugin-next`: Next.js最適化
- `eslint-plugin-react`: React推奨ルール
- `eslint-plugin-react-hooks`: Hooksルール

### TypeScript 設定

```json
{
  "strict": true,
  "noEmit": true,
  "moduleResolution": "bundler"
}
```

---

## 実装機能

### コア機能

- ✅ Markdown/MDX記事の静的生成 (SSG)
- ✅ タグベースの記事分類・フィルタリング
- ✅ レスポンシブデザイン
- ✅ シンタックスハイライト (rehype-highlight)
- ✅ 読了時間の自動計算
- ✅ RSS フィード生成

### パフォーマンス最適化

- ✅ Next.js 16の静的生成 (Build時のレンダリング)
- ✅ 画像最適化 (next/image)
- ✅ コードスプリッティング
- ✅ キャッシュ戦略の実装

---

## 学習と成長 (DevOpsの観点)

### 実装済み

- [x] **AWS実践**: Amplifyによるホスティング
- [x] **CI/CD構築**: GitHub Actionsパイプライン
- [x] **インフラコード化**: amplify.yml
- [x] **自動化**: ビルド、テスト、デプロイの自動化
- [x] **コード品質**: ESLint 9移行、型チェック
- [x] **パッケージ管理最適化**: pnpm導入
- [x] **ブランチ戦略**: feature/* フロー

### 今後の取り組み

- [ ] **IaC (Infrastructure as Code)**: Terraform/CDK導入検討
- [ ] **コンテナ化**: Docker、Docker Compose
- [ ] **モニタリング**: CloudWatch、ログ集約
- [ ] **セキュリティ**: Dependabot、SAST/DAST
- [ ] **テスト自動化**: Unit/E2Eテスト導入
- [ ] **パフォーマンス監視**: Core Web Vitals計測
- [ ] **ブルー/グリーンデプロイ**: ダウンタイムゼロ実現

---

## セットアップ

### 前提条件

- Node.js 18以上
- pnpm 9以上

### ローカル開発

```bash
# 依存関係インストール
pnpm install

# 開発サーバー起動
pnpm dev

# 型チェック
pnpm type-check

# Lint実行
pnpm lint

# Lint自動修正
pnpm lint:fix

# ビルド
pnpm build
```

---

## プロジェクト構成

```
.
├── .github/
│   └── workflows/
│       └── ci.yml          # CI/CDパイプライン
├── content/
│   └── posts/              # Markdown記事
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # Reactコンポーネント
│   ├── lib/                # ユーティリティ、ヘルパー
│   └── types/              # TypeScript型定義
├── amplify.yml             # AWS Amplify設定
├── eslint.config.mjs       # ESLint 9 Flat Config
└── tsconfig.json           # TypeScript設定
```

---

## 技術的なこだわり

### 1. モダンな技術選定

- Next.js 16 (最新安定版)
- React 19 (Server Components対応)
- ESLint 9 (Flat Config)
- pnpm (高速・効率的)

### 2. 継続的改善

- 定期的な依存関係の更新
- パフォーマンス計測と最適化
- コード品質の向上

### 3. 自動化の徹底

- CI/CDによる品質保証
- 自動デプロイ
- キャッシュ最適化

---

## ライセンス

MIT
