import { reviewValue } from "../../interface";

function Review({value}: reviewValue) {
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
                />
            </div>
        </>
    );
}

export default Review;
