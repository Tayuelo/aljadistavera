export interface ICard<T> {
    data: T[];
}

export interface ProjectsDto {
    id: string;
    img: string;
    name: string;
    stack: string[];
    company: string;
    duration: string;
    description: string;
}

export interface FeaturedDto {
    id: string;
    img: string;
    tags: string[];
    title: string;
    description: string;
    readDuration: string;
}