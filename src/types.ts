export interface Source {
    id: string;
    name: string;
    url: string;
    category?: string;
    language?: string;
    country?: string;
    description?: string;
}
export interface Article {
    source: { id: string | null; name: string };
    title: string;
    url: string;
    publishedAt: string;
    author?: string;
    urlToImage?: string;
    description?: string;
    content?: string;
}

export interface ApiResp {
    status: string;
    totalResults?: number;
    articles?: Article[];
    sources?: Source[];
}