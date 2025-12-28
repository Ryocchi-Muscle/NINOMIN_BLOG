import { getPostBySlug, getAllPosts, formatDate } from "@/lib/posts";
import { notFound, redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";
import { CodeBlock } from "@/components/CodeBlock";

type Props = {
  params: Promise<{ slug: string }>;
};

// 静的生成のためのパスを生成
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// メタデータの生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const siteUrl = process.env.SITE_URL || "https://ninomin-blog.vercel.app";

  if (!post) {
    return {
      title: "記事が見つかりません",
    };
  }

  const title = `${post.title} | NINOMIN BLOG`;
  const url = `${siteUrl}/posts/${slug}`;
  const ogImageUrl = `${siteUrl}/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.excerpt)}`;

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      url,
      siteName: "NINOMIN BLOG",
      locale: "ja_JP",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      creator: "@r_ninomin",
      images: [ogImageUrl],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // 外部記事の場合は外部URLにリダイレクト
  if (post.type === "external" && post.externalUrl) {
    redirect(post.externalUrl);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* ヘッダー */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {post.title}
          </h1>

          {/* メタ情報 */}
          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* タグ */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* 本文 */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ ...props }) => (
                <h1
                  className="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-white"
                  {...props}
                />
              ),
              h2: ({ ...props }) => (
                <h2
                  className="text-2xl font-bold mt-6 mb-3 text-slate-900 dark:text-white"
                  {...props}
                />
              ),
              h3: ({ ...props }) => (
                <h3
                  className="text-xl font-bold mt-5 mb-2 text-slate-900 dark:text-white"
                  {...props}
                />
              ),
              p: ({ ...props }) => (
                <p
                  className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed"
                  {...props}
                />
              ),
              ul: ({ ...props }) => (
                <ul
                  className="list-disc list-inside mb-4 space-y-2 text-slate-700 dark:text-slate-300"
                  {...props}
                />
              ),
              ol: ({ ...props }) => (
                <ol
                  className="list-decimal list-inside mb-4 space-y-2 text-slate-700 dark:text-slate-300"
                  {...props}
                />
              ),
              li: ({ ...props }) => <li className="ml-4" {...props} />,
              pre: ({ children }) => <>{children}</>,
              code: ({ className, children, ...props }: any) => {
                const match = /language-(\w+)/.exec(className || "");
                const isBlock =
                  typeof children === "string" && children.includes("\n");

                if (match || isBlock) {
                  return (
                    <CodeBlock className={className} language={match?.[1]}>
                      {children}
                    </CodeBlock>
                  );
                }

                return (
                  <code
                    className="bg-slate-100 dark:bg-slate-800 rounded px-1.5 py-0.5 text-sm text-slate-800 dark:text-slate-200"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              blockquote: ({ ...props }) => (
                <blockquote
                  className="border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic my-4 text-slate-600 dark:text-slate-400"
                  {...props}
                />
              ),
              a: ({ ...props }) => (
                <a
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  {...props}
                />
              ),
              hr: ({ ...props }) => (
                <hr
                  className="my-8 border-slate-300 dark:border-slate-700"
                  {...props}
                />
              ),
              strong: ({ ...props }) => (
                <strong
                  className="font-bold text-slate-900 dark:text-white"
                  {...props}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
