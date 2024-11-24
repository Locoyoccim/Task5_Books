import { useState } from "react";
import { handleLikes } from "../../interface";

function LikeSlider({ handleLikes }: handleLikes) {
    const [likes, setLikes] = useState<string>("0");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setLikes(value);
        handleLikes(value);
    };

    return (
        <>
            <label form="customRange2" className="form-label text-center">
                Likes ( {likes} )
            </label>
            <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                id="customRange2"
                value={likes}
                onChange={handleChange}
            />
        </>
    );
}

export default LikeSlider;
