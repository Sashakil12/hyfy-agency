const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = import.meta.env.STRAPI_API_TOKEN;

interface StrapiImage {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
}

interface StrapiSEO {
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: StrapiImage;
  keywords?: string;
  canonicalURL?: string;
}

export interface Author {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  bio?: string;
  avatar?: StrapiImage;
  email?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author?: Author;
  categories?: Category[];
  publishedDate: string;
  readingTime: number;
  tags?: string[];
  featured?: boolean;
  videoUrl?: string;
  featuredImage?: StrapiImage;
  relatedPosts?: BlogPost[];
  seo?: StrapiSEO;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface BlogPostsResponse {
  data: BlogPost[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface BlogPostResponse {
  data: BlogPost;
}

async function fetchStrapi<T>(endpoint: string): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const response = await fetch(`${STRAPI_URL}/api${endpoint}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getBlogPosts(page = 1, pageSize = 9, categorySlug?: string): Promise<BlogPostsResponse> {
  let url = `/blog-posts?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=publishedDate:desc` +
    `&populate[featuredImage][fields][0]=url&populate[featuredImage][fields][1]=alternativeText&populate[featuredImage][fields][2]=width&populate[featuredImage][fields][3]=height` +
    `&populate[author][fields][0]=name&populate[author][fields][1]=slug&populate[author][populate][avatar][fields][0]=url` +
    `&populate[categories][fields][0]=name&populate[categories][fields][1]=slug&populate[categories][fields][2]=color` +
    `&populate[seo][populate][metaImage][fields][0]=url`;

  // Add category filter if provided
  if (categorySlug) {
    url += `&filters[categories][slug][$eq]=${categorySlug}`;
  }

  return fetchStrapi<BlogPostsResponse>(url);
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetchStrapi<{ data: Category[] }>('/categories?sort[0]=name:asc');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetchStrapi<BlogPostsResponse>(
      `/blog-posts?filters[slug][$eq]=${slug}` +
      `&populate[featuredImage][fields][0]=url&populate[featuredImage][fields][1]=alternativeText&populate[featuredImage][fields][2]=width&populate[featuredImage][fields][3]=height&populate[featuredImage][fields][4]=formats` +
      `&populate[author][fields][0]=name&populate[author][fields][1]=slug&populate[author][fields][2]=bio&populate[author][fields][3]=twitter&populate[author][populate][avatar][fields][0]=url&populate[author][populate][avatar][fields][1]=alternativeText` +
      `&populate[categories][fields][0]=name&populate[categories][fields][1]=slug&populate[categories][fields][2]=color` +
      `&populate[relatedPosts][fields][0]=title&populate[relatedPosts][fields][1]=slug&populate[relatedPosts][fields][2]=excerpt&populate[relatedPosts][fields][3]=publishedDate&populate[relatedPosts][fields][4]=readingTime&populate[relatedPosts][populate][featuredImage][fields][0]=url&populate[relatedPosts][populate][author][fields][0]=name` +
      `&populate[seo][populate][metaImage][fields][0]=url&populate[seo][populate][metaImage][fields][1]=alternativeText`
    );

    return response.data[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export function getImageUrl(image: StrapiImage | undefined): string {
  if (!image?.url) return '/placeholder-blog.jpg';

  // If URL is absolute, return as is
  if (image.url.startsWith('http')) {
    return image.url;
  }

  // Otherwise, prepend Strapi URL
  return `${STRAPI_URL}${image.url}`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function parseMarkdown(markdown: string): Promise<string> {
  const { marked } = await import('marked');

  // Configure marked options
  marked.setOptions({
    gfm: true, // GitHub Flavored Markdown
    breaks: true, // Convert \n to <br>
  });

  // Parse markdown to HTML
  const html = await marked.parse(markdown);

  return html;
}
