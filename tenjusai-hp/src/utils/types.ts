
export type Supporter = {
    id: number;
    name: string;
    link: string | null;
    thumbnail_link: string;
}

export type Banner = {
    id: number;
    name: string;
    link: string | null;
    alt: string;
    thumbnail_link: string;
}

export type Info = {
    supporters: Supporter[];
    banners: Banner[];
}