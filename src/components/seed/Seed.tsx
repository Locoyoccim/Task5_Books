import { useEffect, useState } from "react";
import { HandleChange } from "../../interface";

function Seed({HandleChange}: HandleChange) {
    const [seed, setSeed] = useState<string>("");

    const SeedGenerator = () => {
        const seed = Math.floor(Math.random() * 1000000).toString();
        setSeed(seed);
    };
    
    useEffect(() => {
        HandleChange('seed', seed)
    },[seed])

    return (
        <div className="input-group input-group-md">
            <span
                className="input-group-text"
                role="button"
                id="inputGroup-sizing-lg"
                onClick={SeedGenerator}
            >
                <i className="bi bi-shuffle"></i>
            </span>
            <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                value={seed}
                onChange={(e) => setSeed(e.target.value)}
                placeholder="Seed"
            />
        </div>
    );
}

export default Seed;
