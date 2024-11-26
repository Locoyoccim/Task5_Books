import { useState } from "react";
import { Book } from "../interface";

function useFilter(ActualList: Book[]) {
    const [filteredList, setFilteredList] = useState<Book[]>(ActualList);

    const handleLikes = (n: string) => {
        const numLikes = Number(n);
        const likesList = ActualList.filter(
            (item) => Number(item.likes) === numLikes
        );
        if (likesList.length > 0) {
            setFilteredList(likesList);
        } else {
            setFilteredList(ActualList);
        }
    };

    const handleReviews = (n: string) => {
        const numReviews = Number(n);
        const reviewsList = ActualList.filter(
            (item) => item.reviews.length === numReviews
        );
        setFilteredList(reviewsList);
    };

    return { handleLikes, handleReviews, filteredList };
}

export default useFilter;
