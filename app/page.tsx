import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Personal Blog – Ryo Ninomiya
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          個人の学びや経験を発信するための技術ブログ。
          <br />
          Markdownで記事を管理し、タグで分類。
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="/blog">記事を読む</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/about">About</a>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[980px]">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">技術スタック</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 font-semibold">フロントエンド</h3>
            <p className="text-sm text-muted-foreground">
              Next.js 14 + TypeScript + Tailwind CSS
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 font-semibold">UI コンポーネント</h3>
            <p className="text-sm text-muted-foreground">
              shadcn/ui + Lucide React
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 font-semibold">記事管理</h3>
            <p className="text-sm text-muted-foreground">
              Markdown + gray-matter + remark
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 font-semibold">デプロイ</h3>
            <p className="text-sm text-muted-foreground">
              Vercel → AWS Amplify
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 font-semibold">バックエンド</h3>
            <p className="text-sm text-muted-foreground">
              Hono.js（拡張予定）
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 font-semibold">CI/CD</h3>
            <p className="text-sm text-muted-foreground">
              GitHub Actions（Step2）
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
