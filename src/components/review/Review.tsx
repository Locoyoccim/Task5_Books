import { useEffect, useState } from "react";
import { handleReviews } from "../../interface";

function Review({ filterReviews }: handleReviews) {
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        filterReviews(value);
    }, [value]);

    return (
        <>
            <div className="input-group flex-nowrap">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Review"
                    aria-label="Review"
                    aria-describedby="addon-wrapping"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </>
    );
}

export default Review;
