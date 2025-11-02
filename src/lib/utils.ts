import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { PostMeta, FrontMatter } from "@/types/post";

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

// 記事を日付の新しい順にソートする関数
export function sortByDate<T extends { date: string }>(posts: T[]): T[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// 記事が保存されているディレクトリのパス
const postsDirectory = path.join(process.cwd(), "content/posts");

// 全記事のメタデータを取得する関数（メインページ用）
export function getAllPosts(): PostMeta[] {
  // postsディレクトリが存在しない場合は空配列を返す
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    // .mdxまたは.mdファイルのみを対象にする
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      // ファイル名から拡張子を除去してslugを作成
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      // frontmatterと本文を分離
      const { data, content } = matter(fileContents);
      const frontMatter = data as FrontMatter;
      // 読了時間を計算
      const stats = readingTime(content);

      const post: PostMeta = {
        slug,
        title: frontMatter.title,
        date: frontMatter.date,
        excerpt: frontMatter.excerpt,
        tags: frontMatter.tags || [],
        readingTime: stats.text,
        published: frontMatter.published ?? true,
      };

      return post;
    })
    // 公開済み記事のみを抽出
    .filter((post) => post.published);

  return sortByDate(allPosts);
}

// 全記事から重複のないタグ一覧を取得する関数
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

// slugから特定の記事を本文込みで取得する関数（詳細ページ用）
export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    // .mdxが無ければ.mdも試す
    const mdPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(mdPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(mdPath, "utf8");
    const { data, content } = matter(fileContents);
    const frontMatter = data as FrontMatter;
    const stats = readingTime(content);

    return {
      slug,
      title: frontMatter.title,
      date: frontMatter.date,
      excerpt: frontMatter.excerpt,
      content,
      tags: frontMatter.tags || [],
      readingTime: stats.text,
      published: frontMatter.published ?? true,
    };
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontMatter = data as FrontMatter;
  const stats = readingTime(content);

  return {
    slug,
    title: frontMatter.title,
    date: frontMatter.date,
    excerpt: frontMatter.excerpt,
    content,
    tags: frontMatter.tags || [],
    readingTime: stats.text,
    published: frontMatter.published ?? true,
  };
}
