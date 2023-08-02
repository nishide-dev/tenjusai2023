
export type Supporter = {
    id: number;
    name: string;
    link: string | null;
    thumbnail_link: string;
}

export type Info = {
    supporters: Supporter[];
}