import React from "react";
import { useState } from "react";

export default function Textarea() {
    const [textarea, setTextarea] = useState(
        "The content of aetarea goes in the value hdkjkf jfjff hfjfljifijkjfkkjfkkkkmgl giooig, jhgik jhjkl jhhkkk ujkll hjllk "
    );

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    return (
        
        <form className="form-group mt-3">
            <div className="row">
                <textarea value={textarea} onChange={handleChange} />
            </div>
        </form>

    )
}