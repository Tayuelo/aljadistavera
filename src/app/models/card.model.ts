export interface ICard {
    title: string;
    description: string;
    img?: string;
    tags: Tags;
}

export type Tags = string[];