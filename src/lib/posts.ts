import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { PostMeta, FrontMatter, PostCategory } from "@/types/post";

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
const postsDirectory = path.join(process.cwd(), "content/posts/active");

// 全記事のメタデータを取得する関数(メインページ用)
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
        updatedAt: frontMatter.updatedAt,
        excerpt: frontMatter.excerpt,
        tags: frontMatter.tags || [],
        readingTime: stats.text,
        published: frontMatter.published ?? true,
        type: frontMatter.type ?? "internal",
        category: frontMatter.category,
        externalUrl: frontMatter.externalUrl,
        platform: frontMatter.platform,
      };

      // バリデーション: externalUrl があるのに type が external でない場合は警告
      if (frontMatter.externalUrl && frontMatter.type !== "external") {
        console.warn(
          `Warning: ${fileName} has externalUrl but type is not "external"`
        );
      }

      return post;
    })
    // 公開済み記事のみを抽出
    .filter((post) => post.published);

  return sortByDate(allPosts);
}

// 内部記事のみを取得する関数
export function getInternalPosts(): PostMeta[] {
  return getAllPosts().filter((post) => post.type === "internal");
}

// 外部記事のみを取得する関数
export function getExternalPosts(): PostMeta[] {
  return getAllPosts().filter((post) => post.type === "external");
}

// カテゴリ別に記事を取得する関数
export function getPostsByCategory(category: PostCategory): PostMeta[] {
  return getInternalPosts().filter((post) => post.category === category);
}

// 週次振り返り記事を取得
export function getWeeklyPosts(): PostMeta[] {
  return getPostsByCategory("weekly");
}

// 月次振り返り記事を取得
export function getMonthlyPosts(): PostMeta[] {
  return getPostsByCategory("monthly");
}

// 技術記事を取得
export function getTechPosts(): PostMeta[] {
  return getPostsByCategory("tech");
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

// slugから特定の記事を本文込みで取得する関数(詳細ページ用)
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
      type: frontMatter.type ?? "internal",
      externalUrl: frontMatter.externalUrl,
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
    type: frontMatter.type ?? "internal",
    externalUrl: frontMatter.externalUrl,
  };
}
