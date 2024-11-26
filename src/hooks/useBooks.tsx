import { useEffect, useState } from "react";
import { Book, getProps, reviewsData } from "../interface";
import axios from "axios";

function GetBooks(props: getProps) {
    const [booksList, setBooksList] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const FetchBooks = (props: getProps) => {
        setLoading(true);
        axios
            .get(
                `https://fakerapi.it/api/v2/books?_locale=${props.language}&_quantity=${props.quantity}&_seed=${props.seed}`
            )
            .then((response) => {
                const booksWithDefaults = response.data.data.map(
                    (book: Book) => {
                        const numReviews = Math.floor(Math.random() * 6);

                        const bookReviews = Array.from(
                            { length: numReviews },
                            () =>
                                reviewsData[
                                    Math.floor(
                                        Math.random() * reviewsData.length
                                    )
                                ]
                        );
                        return {
                            ...book,
                            likes: Math.floor(Math.random() * 11).toString(),
                            reviews: bookReviews,
                        };
                    }
                );

                setBooksList(booksWithDefaults);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const fetchMoreBooks = async (props: getProps) => {
        if (loading) return;

        await axios
            .get(
                `https://fakerapi.it/api/v2/books?_locale=${props.language}&_quantity=10&_seed=${props.seed}`
            )
            .then((response) => {
                const booksWithDefaults = response.data.data.map(
                    (book: Book) => {
                        const numReviews = Math.floor(Math.random() * 6);

                        const bookReviews = Array.from(
                            { length: numReviews },
                            () =>
                                reviewsData[
                                    Math.floor(
                                        Math.random() * reviewsData.length
                                    )
                                ]
                        );

                        return {
                            ...book,
                            likes: Math.floor(Math.random() * 11).toString(),
                            reviews: bookReviews,
                        };
                    }
                );

                setTimeout(() => {
                    setBooksList([...booksList, ...booksWithDefaults]);
                }, 1500);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        FetchBooks(props);
    }, [props]);

    return { booksList, loading, fetchMoreBooks };
}

export default GetBooks;
