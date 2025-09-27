
"use client"
import { useState } from "react";

export default function AboutPage() {
    let [count, setCount] = useState(0);
    const handleClick = () => {

        setCount(count => count += 1);
    };
    return (
        <div>
            <button onClick={handleClick}>点我加一</button>
            <h1>计数器:{count}</h1>
        </div>
    );
}