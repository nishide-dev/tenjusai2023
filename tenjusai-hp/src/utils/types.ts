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
    first: boolean;
}

export type Food = {
    id: number;
    name: string;
    description?: string;
    thumbnail_link: string;
    content: string;
    price: string;
}

export type Lab = {
    id: number;
    name: string;
    description: string;
    thumbnail_link: string;
    place: string;
    content: string;
    first: boolean;
    second: boolean;
    first_date: string;
    second_date: string;
}

export type Event = {
    id: number;
    name: string;
    description: string;
    thumbnail_link: string;
    place: string;
    first: boolean;
    second: boolean;
    first_date: string;
    second_date: string;
    needs_reservation: boolean;
    reservation_notes?: string;
}

export type ImageLink = {
    id: number;
    name: string;
    thumbnail_link: string;
}

export type Info = {
    supporters: Supporter[];
    banners: Banner[];
    dispatchers: Dispatcher[];
    stages: Stage[];
    foods: Food[];
    labs: Lab[];
    events: Event[];
    image_links: ImageLink[];
}