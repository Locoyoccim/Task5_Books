import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import InfiniteScroll from "react-infinite-scroll-component";
import LanguageSelect from "./components/languageSelect/LanguageSelect";
import Seed from "./components/seed/Seed";
import LikeSlider from "./components/slider/LikeSlider";
import Review from "./components/review/Review";
import { useEffect, useState } from "react";
import { Book, getProps } from "./interface";
import Loading from "./components/loaders/Loading";
import CardBook from "./components/carView/CardBook";
import ChangeMode from "./components/chengeButton/ChangeMode";
import ExportCSV from "./components/exportCSV/ExportCSV";
import useBooks from "./hooks/useBooks";
import useFilter from "./hooks/useFilter";
import TableBook from "./components/book_details/TableBook";

function App() {
    const [ListMode, setListMode] = useState<boolean>(true);
    const [getParams, setGetParams] = useState<getProps>({
        quantity: "25",
        language: "en_EN",
        seed: "0",
        likes: "0",
        avgReview: "",
    });
    const { booksList, fetchMoreBooks } = useBooks(getParams);
    const [bookList, setBookList] = useState<Book[]>([]);
    const { handleLikes, handleReviews, filteredList } = useFilter(booksList);

    useEffect(() => {
        setBookList(booksList);
    }, [booksList]);

    useEffect(() => {
        setBookList(filteredList);
    }, [filteredList]);

    const addNewReview = (reviews: string, user: string, bookId: number) => {
        setBookList((prevState) => {
            const newBookList = prevState.map((book) => {
                if (book.id === bookId) {
                    return {
                        ...book,
                        reviews: [...book.reviews, { reviews, user }],
                    };
                }
                return book;
            });
            return newBookList;
        });
    };

    const HandleChange = (name: string, value: string) => {
        setGetParams((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <>
            <nav className="d-grid gap-2 d-md-flex align-items-center gap-md-4 bg-secondary bg-opacity-25 p-4">
                <LanguageSelect HandleChange={HandleChange} />
                <Seed HandleChange={HandleChange} />
                <LikeSlider handleLikes={handleLikes} />
                <Review filterReviews={handleReviews} />
                <ChangeMode setListMode={setListMode} listMode={ListMode} />
                <ExportCSV books={bookList} />
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
                        <TableBook
                            bookList={bookList}
                            addNewReview={addNewReview}
                        />
                    )}
                </section>
            </InfiniteScroll>
        </>
    );
}

export default App;
