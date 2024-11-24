import { useEffect, useState } from "react";
import { HandleChange } from "../../interface";

function LanguageSelect({ HandleChange }: HandleChange) {
    const [idiomKey, setIdiomKey] = useState<string>("");

    useEffect(() => {
        HandleChange("language", idiomKey);
    }, [idiomKey]);

    return (
        <>
            <select
                defaultValue={idiomKey}
                onChange={(e) => setIdiomKey(e.target.value)}
                className="form-select"
                aria-label="Large select example"
            >
                <option value={"en_EN"}>Select Language:</option>
                <option value="es_ES">Spanish (ES)</option>
                <option value="en_EN">English (US)</option>
                <option value="de_DE">German</option>
                <option value="ru_RU">Russian</option>
            </select>
        </>
    );
}

export default LanguageSelect;
