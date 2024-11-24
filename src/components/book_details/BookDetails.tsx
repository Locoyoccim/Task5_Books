import { Book } from "../../interface";

function BookDetails({
    author,
    description,
    genre,
    id,
    isbn,
    published,
    publisher,
    title,
    index,
    likes,
}: Book & { index: number }) {
    const UpArrow = <i className="bi bi-caret-up"></i>;

    const getYear = (date: string) => {
        const year = date.split("-")[0];
        return year;
    };

    return (
        <>
            <tr
                key={index}
                role="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${id}`}
                aria-expanded="false"
                aria-controls={`collapse${id}`}
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
                    <div className="collapse" id={`collapse${id}`}>
                        <div className="card card-body d-flex flex-row gap-3 p-3">
                            <div>
                                <img
                                    src={
                                        "https://imgs.search.brave.com/zI8CJjLGqo5IkEU2H34LpaV5Xfi4avw1WA-Oo6hHqYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdWIt/c3RhdGljLmZvdG9y/LmNvbS9hc3NldHMv/cHJvamVjdHMvcGFn/ZXMvNWJlOWQxNWEt/MGRjNi00OWUwLWI0/MWItYjc4N2I1NmE5/ZmFjL2RhcmstYmx1/ZS1za3ktYm9vay1j/b3Zlci0zMDJjMjQ5/N2Y1MTc0MWNjYjRm/OTRkZTQ4MWIwYTM0/Yy5qcGc"
                                    }
                                    alt={title}
                                    style={{ width: "100px" }}
                                />
                                <div
                                    className="text-center bg-primary rounded-5 text-bg-primary py-1 mt-1"
                                    style={{ width: 60, marginLeft: 20 }}
                                >
                                    {likes}{" "}
                                    <i className="bi bi-hand-thumbs-up-fill"></i>
                                </div>
                            </div>
                            <div>
                                <h2 className="mb-2">{title}</h2>
                                <h4>by {author}</h4>
                                <p className="opacity-50 m-0 p-0">{publisher}, {getYear(published)}</p>
                                <p className="mb-1">
                                    <strong>Description: </strong>
                                    {description}
                                </p>
                                <p className="mb-0">
                                    <strong>Genre:</strong> {genre}
                                </p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default BookDetails;
