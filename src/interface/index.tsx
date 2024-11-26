export interface reviewsProps {
    reviews: string;
    user: string;
}
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
    likes: string;
    index?: number;
    reviews: reviewsProps[];
    addNewReview: (reviews: string, user: string, bookId: number) => void;
}

export interface HandleChange {
    HandleChange: (name: string, value: string) => void;
}

export interface handleLikes {
    handleLikes: (n: string) => void;
}

export interface handleReviews {
    filterReviews: (n: string) => void;
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
    avgReview: string;
}

export interface ChangeModeProps {
    setListMode: (mode: boolean) => void;
    listMode: boolean;
}

export interface TableProps {
    bookList: Book[];
    addNewReview: (reviews: string, user: string, bookId: number) => void;
}

export const reviewsData = [
    {
        reviews:
            "This book completely changed my perspective. Highly recommended!",
        user: "JohnDoe123",
    },
    {
        reviews: "An engaging story with well-developed characters. Loved it!",
        user: "BookLover88",
    },
    {
        reviews:
            "A bit slow at the start, but it picks up beautifully. Worth a read.",
        user: "ReadingAddict45",
    },
    {
        reviews: "Not my favorite, but the plot twist was unexpected.",
        user: "JaneSmith09",
    },
    {
        reviews: "I couldn't put it down! A real page-turner.",
        user: "StoryFanatic77",
    },
    {
        reviews: "The writing was poetic and mesmerizing. Truly a masterpiece.",
        user: "PoetryLover2022",
    },
    {
        reviews: "It had potential, but the ending was disappointing.",
        user: "CriticEyes44",
    },
    {
        reviews: "A delightful read. Perfect for a cozy weekend.",
        user: "WeekendReader",
    },
    {
        reviews: "Packed with action and suspense! Loved every chapter.",
        user: "ThrillerFan91",
    },
    {
        reviews: "A great addition to the series. Can't wait for the next one!",
        user: "SeriesLover",
    },
    {
        reviews:
            "This book completely changed my perspective. Highly recommended!",
        user: "JohnDoe123",
    },
    {
        reviews: "An engaging story with well-developed characters. Loved it!",
        user: "BookLover88",
    },
    {
        reviews:
            "A bit slow at the start, but it picks up beautifully. Worth a read.",
        user: "ReadingAddict45",
    },
    {
        reviews: "Not my favorite, but the plot twist was unexpected.",
        user: "JaneSmith09",
    },
    {
        reviews: "I couldn't put it down! A real page-turner.",
        user: "StoryFanatic77",
    },
    {
        reviews: "The writing was poetic and mesmerizing. Truly a masterpiece.",
        user: "PoetryLover2022",
    },
    {
        reviews: "It had potential, but the ending was disappointing.",
        user: "CriticEyes44",
    },
    {
        reviews: "A delightful read. Perfect for a cozy weekend.",
        user: "WeekendReader",
    },
    {
        reviews: "Packed with action and suspense! Loved every chapter.",
        user: "ThrillerFan91",
    },
    {
        reviews: "A great addition to the series. Can't wait for the next one!",
        user: "SeriesLover",
    },
];
