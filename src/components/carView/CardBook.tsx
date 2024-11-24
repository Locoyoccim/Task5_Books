import { Book } from "../../interface";

function CardBook({
    author,
    description,
    genre,
    isbn,
    published,
    publisher,
    title,
    likes,
}: Book) {
    const getYear = (date: string) => {
        const year = date.split("-")[0];
        return year;
    };
    return (
        <div className="card mt-4 " style={{ width: 280 }}>
            <img
                src="https://imgs.search.brave.com/zI8CJjLGqo5IkEU2H34LpaV5Xfi4avw1WA-Oo6hHqYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdWIt/c3RhdGljLmZvdG9y/LmNvbS9hc3NldHMv/cHJvamVjdHMvcGFn/ZXMvNWJlOWQxNWEt/MGRjNi00OWUwLWI0/MWItYjc4N2I1NmE5/ZmFjL2RhcmstYmx1/ZS1za3ktYm9vay1j/b3Zlci0zMDJjMjQ5/N2Y1MTc0MWNjYjRm/OTRkZTQ4MWIwYTM0/Yy5qcGc"
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <div className="d-flex align-middle justify-content-between">
                    <h5 className="card-title">{title}</h5>
                    <div
                        className="text-center bg-primary rounded-5 text-bg-primary"
                        style={{ width: 50, marginLeft: 5, height: 25 }}
                    >
                        {likes} <i className="bi bi-hand-thumbs-up-fill"></i>
                    </div>
                </div>
                <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    {" "}
                    <strong>Author: </strong>
                    {author}
                </li>
                <li className="list-group-item">
                    <strong>Genre:</strong> {genre}
                </li>
                <li className="list-group-item">
                    <strong>Publisher:</strong> {publisher},{" "}
                    {getYear(published)}
                </li>
                <li className="list-group-item">
                    <strong>ISBN: </strong>
                    {isbn}
                </li>
            </ul>
        </div>
    );
}

export default CardBook;
