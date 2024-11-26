import { useEffect, useState } from "react";
import { handleLikes } from "../../interface";

function LikeSlider({ handleLikes }: handleLikes) {
    const [likes, setLikes] = useState<string>("0");

    useEffect(() =>{
        handleLikes(likes)
    },[likes])

    return (
        <>
            <label form="customRange2" className="form-label text-center">
                Likes ( {likes} )
            </label>
            <input
                type="range"
                className="form-range"
                min="0"
                max="10"
                id="customRange2"
                value={likes}
                onChange={(e) => {setLikes(e.target.value)}}
            />
        </>
    );
}

export default LikeSlider;
