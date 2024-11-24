import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import InfiniteScroll from "react-infinite-scroll-component";
import LanguageSelect from "./components/languageSelect/LanguageSelect";
import Seed from "./components/seed/Seed";
import LikeSlider from "./components/slider/LikeSlider";
import Review from "./components/review/Review";
import axios from "axios";
import { useEffect, useState } from "react";
import { Book, getProps } from "./interface";
import Loading from "./components/loaders/Loading";
import BookDetails from "./components/book_details/BookDetails";
import CardBook from "./components/carView/CardBook";
import ChangeMode from "./components/chengeButton/ChangeMode";
import ExportCSV from "./components/exportCSV/ExportCSV";

function App() {
    const [bookList, setBookList] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [ListMode, setListMode] = useState<boolean>(true);
    const [review, setReview] = useState<string>("0");
    const [getParams, setGetParams] = useState<getProps>({
        quantity: "25",
        language: "en_EN",
        seed: "0",
        likes: "0",
    });
    console.log(bookList);

    const GetBook = (props: getProps) => {
        setLoading(true);
        axios
            .get(
                `https://fakerapi.it/api/v2/books?_locale=${props.language}&_quantity=${props.quantity}&_seed=${props.seed}`
            )
            .then((response) => {
                const booksWithDefaults = response.data.data.map(
                    (book: Book) => ({
                        ...book,
                        likes: Math.floor(Math.random() * 6).toString(),
                        reviews: "esta es una review",
                    })
                );
                setBookList(booksWithDefaults);
                console.log(response.data);
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
                    (book: Book) => ({
                        ...book,
                        likes: Math.floor(Math.random() * 6).toString(),
                        reviews: "esta es una review",
                    })
                );
                setTimeout(() => {
                    setBookList([...bookList, ...booksWithDefaults]);
                }, 1500);
            });
    };

    const handleLikes = (n: string) => {
        const likesList = bookList.filter((item) => item.likes == n);
        setBookList(likesList);
    };

    const HandleChange = (name: string, value: string) => {
        setGetParams((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleReviews = () => {
        const listCount = bookList.length;
        const sumList = bookList.reduce(
            (acc, item) => acc + parseFloat(item.likes),
            0
        );

        const result = listCount > 0 ? sumList / listCount : 0;

        setReview(result.toFixed(1));
    };

    useEffect(() => {
        GetBook(getParams);
    }, [getParams]);

    useEffect(() => {
        handleReviews();
        if (bookList.length == 0) GetBook(getParams);
    }, [bookList]);

    return (
        <>
            <nav className="d-grid gap-2 d-md-flex align-items-center gap-md-4 bg-secondary bg-opacity-25 p-4">
                <LanguageSelect HandleChange={HandleChange} />
                <Seed HandleChange={HandleChange} />
                <LikeSlider handleLikes={handleLikes} />
                <Review value={review} />
                <ChangeMode setListMode={setListMode} listMode={ListMode} />
                <ExportCSV books={bookList}/>
            </nav>
            <InfiniteScroll
                dataLength={bookList.length}
                next={() => fetchMoreBooks(getParams)}
                hasMore={bookList.length < 100}
                loader={<Loading />}
                endMessage={<p>No more books to load</p>}
            >
                <section
                    id="book_render"
                    className="px-3 table-responsive d-flex flex-wrap gap-4 justify-content-center"
                >
                    {!ListMode ? (
                        bookList.map((item, index) => (
                            <CardBook key={index + 1} {...item} index={index} />
                        ))
                    ) : (
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: 10 }}></th>
                                    <th scope="col">#</th>
                                    <th scope="col">ISBN</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author(s)</th>
                                    <th scope="col">Publisher</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookList.map((item, index) => (
                                    <BookDetails
                                        key={index + 1}
                                        {...item}
                                        index={index}
                                    />
                                ))}
                            </tbody>
                        </table>
                    )}
                </section>
            </InfiniteScroll>
        </>
    );
}

export default App;