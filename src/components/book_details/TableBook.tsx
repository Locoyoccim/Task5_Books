import { TableProps } from "../../interface";
import BookDetails from "./BookDetails";

function TableBook({bookList, addNewReview}: TableProps) {
    return (
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
                        addNewReview={addNewReview}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default TableBook;
