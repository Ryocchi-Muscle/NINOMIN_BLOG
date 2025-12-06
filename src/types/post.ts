export type PostType = "internal" | "external";
export type PostCategory = "weekly" | "monthly" | "tech";

export interface Post {
  slug: string;
  title: string;
  date: string;
  updatedAt?: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: string;
  published: boolean;
  type: PostType;
  category?: PostCategory;
  externalUrl?: string;
  platform?: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  updatedAt?: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  published: boolean;
  type: PostType;
  category?: PostCategory;
  externalUrl?: string;
  platform?: string;
}

export interface FrontMatter {
  title: string;
  date: string;
  updatedAt?: string;
  excerpt: string;
  tags: string[];
  published?: boolean;
  type?: PostType;
  category?: PostCategory;
  externalUrl?: string;
  platform?: string;
}
