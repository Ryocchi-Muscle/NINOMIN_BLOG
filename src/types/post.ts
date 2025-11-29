export type PostType = "internal" | "external";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: string;
  published: boolean;
  type: PostType;
  externalUrl?: string;
  platform?: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  published: boolean;
  type: PostType;
  externalUrl?: string;
  platform?: string;
}

export interface FrontMatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  published?: boolean;
  type?: PostType;
  externalUrl?: string;
  platform?: string;
}
