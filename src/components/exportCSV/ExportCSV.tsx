import { Book } from "../../interface";
import { CSVLink } from "react-csv";

function ExportCSV({ books }: { books: Book[] }) {
    const headers = [
        { label: "ISBN", key: "isbn" },
        { label: "tittle", key: "title" },
        { label: "author", key: "author" },
        { label: "publisher", key: "publisher" },
        { label: "published", key: "published" },
        { label: "genre", key: "genre" },
    ];

    return (
        <div className="">
            <CSVLink
                data={books}
                headers={headers}
                filename="booksList.csv"
                className="btn btn-outline-success"
            >
                <i className="bi bi-file-earmark-arrow-down-fill"></i>
            </CSVLink>
        </div>
    );
}

export default ExportCSV;
