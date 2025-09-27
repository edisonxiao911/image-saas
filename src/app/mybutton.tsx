"use client"

import { error } from "console";

export default function MyButton() {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
            if (!response.ok) {
                throw new Error(`response error ${response.status}`);

            }
            return response.text();
        })
            .then(data => {
                console.log("response", data);
                alert(data);
            }).catch(
                error => { console.log(error); }
            );
        alert('xxxxxxxxxxxxxxxxxxxxxxxxxss');
    }

    }> 点我发送异步请求</button >
}