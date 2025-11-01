export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: string;
  published: boolean;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  published: boolean;
}

export interface FrontMatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  published?: boolean;
}
