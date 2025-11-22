import RSS from "rss";
import { getAllPosts } from "./posts";

/**
 * RSSフィードのXMLを生成する関数
 * 全記事データを取得してRSS 2.0形式のXMLに変換する
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
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/posts/${post.slug}`,
      date: post.date,
      categories: post.tags,
    });
  });

  return feed.xml({ indent: true });
}
