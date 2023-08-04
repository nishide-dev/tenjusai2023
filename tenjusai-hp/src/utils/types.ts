
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

export type Dispatcher = {
    id: number;
    name: string;
}

export type Stage = {
    id: number;
    name: string;
    description: string;
    thumbnail_link: string;
    genre: string;
    category: string;
    main: boolean;
    start: string;
    end: string;
}

export type Info = {
    supporters: Supporter[];
    banners: Banner[];
    dispatchers: Dispatcher[];
    stages: Stage[];
}