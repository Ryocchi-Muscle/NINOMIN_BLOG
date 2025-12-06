import RSS from "rss";
import { getAllPosts } from "./posts";

/**
 * RSSフィードのXMLを生成する関数
 * 全記事データを取得してRSS 2.0形式のXMLに変換する
 * updatedAtが設定されている場合、guidに更新日を含めて再通知を可能にする
 */
export function generateRssFeed() {
  const siteUrl = "https://ninominlog.com";

  const feed = new RSS({
    title: "NINOMIN BLOG",
    description: "SRE / バックエンドエンジニア志望 Ryo Ninomiyaの技術ブログ",
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    language: "ja",
    pubDate: new Date().toUTCString(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Ryo Ninomiya`,
  });

  const posts = getAllPosts();

  posts.forEach((post) => {
    // updatedAtがある場合はguidに含めて、更新時に再通知されるようにする
    const guid = post.updatedAt
      ? `${siteUrl}/posts/${post.slug}#updated-${post.updatedAt}`
      : `${siteUrl}/posts/${post.slug}`;

    feed.item({
      title: post.updatedAt ? `[更新] ${post.title}` : post.title,
      description: post.excerpt,
      url: `${siteUrl}/posts/${post.slug}`,
      guid: guid,
      date: post.updatedAt || post.date,
      categories: post.tags,
    });
  });

  return feed.xml({ indent: true });
}
