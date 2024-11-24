export interface Book {
    author: string;
    description: string;
    genre: string;
    id: number;
    image: string;
    isbn: string;
    published: string;
    publisher: string;
    title: string;
    index?: number;
    likes: string
}

export interface HandleChange {
    HandleChange: (name: string, value:string) => void;
}

export interface handleLikes {
    handleLikes: (n: string) => void;
}

export interface SliderProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
}

export interface getProps {
    quantity: string;
    language: string;
    seed: string;
    likes: string;
}

export interface reviewValue {
    value: string
}
