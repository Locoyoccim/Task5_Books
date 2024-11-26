import { useRef } from "react";
import { Book } from "../../interface";

function BookDetails({
    author,
    description,
    id,
    genre,
    isbn,
    published,
    publisher,
    title,
    index,
    likes,
    reviews,
    addNewReview,
}: Book & { index: number }) {
    const UpArrow = <i className="bi bi-caret-up"></i>;
    const reviewRef = useRef<HTMLTextAreaElement | null>(null);
    const userRef = useRef<HTMLInputElement | null>(null);

    const getYear = (date: string) => {
        const year = date.split("-")[0];
        return year;
    };

    const sendReview = () => {
        const review = reviewRef.current?.value;
        const user = userRef.current?.value;

        if (review && user) addNewReview(review, user, id);
        if (reviewRef.current) reviewRef.current.value = "";
        if (userRef.current) userRef.current.value = "";
    };

    return (
        <>
            <tr
                key={index}
                role="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
            >
                <th scope="row">{UpArrow}</th>
                <th>{index + 1}</th>
                <td>{isbn}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td>
                    {publisher}, {getYear(published)}
                </td>
            </tr>
            <tr>
                <td colSpan={6} className="p-0">
                    <div className="collapse" id={`collapse${index}`}>
                        <div className="card card-body d-flex flex-row gap-3 p-3">
                            <div>
                                <img
                                    src={
                                        "https://imgs.search.brave.com/zI8CJjLGqo5IkEU2H34LpaV5Xfi4avw1WA-Oo6hHqYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdWIt/c3RhdGljLmZvdG9y/LmNvbS9hc3NldHMv/cHJvamVjdHMvcGFn/ZXMvNWJlOWQxNWEt/MGRjNi00OWUwLWI0/MWItYjc4N2I1NmE5/ZmFjL2RhcmstYmx1/ZS1za3ktYm9vay1j/b3Zlci0zMDJjMjQ5/N2Y1MTc0MWNjYjRm/OTRkZTQ4MWIwYTM0/Yy5qcGc"
                                    }
                                    alt={title}
                                    style={{ width: "150px" }}
                                />
                            </div>
                            <div>
                                <div className="d-flex align-items-center gap-2">
                                    <h2 className="mb-2">{title}</h2>
                                    <div
                                        role="button"
                                        className="text-center bg-primary rounded-5 text-bg-primary "
                                        style={{ width: 60, height: 25 }}
                                    >
                                        {likes}{" "}
                                        <i className="bi bi-hand-thumbs-up-fill"></i>
                                    </div>
                                </div>
                                <h4>by {author}</h4>
                                <p className="opacity-50 m-0 p-0">
                                    {publisher}, {getYear(published)}
                                </p>
                                <p className="mb-1">
                                    <strong>Description: </strong>
                                    {description}
                                </p>
                                <p className="mb-0">
                                    <strong>Genre:</strong> {genre}
                                </p>
                                <h4 className="mt-3">Reviews:</h4>
                                {reviews.map((review, index) => (
                                    <div key={index} className="mb-3">
                                        <div>
                                            <p className="m-0 p-0">
                                                {review.reviews}
                                            </p>
                                            <p className="m-0 p-0 text-secondary">
                                                --- {review.user}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                <div className="newReview">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            Your Review
                                        </span>
                                        <textarea
                                            className="form-control"
                                            aria-label="With textarea"
                                            style={{ resize: "none" }}
                                            ref={reviewRef}
                                        ></textarea>
                                        <div className="input-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="button-addon2"
                                                ref={userRef}
                                            />
                                            <button
                                                className="btn btn-outline-success"
                                                type="button"
                                                id="button-addon2"
                                                onClick={sendReview}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default BookDetails;
