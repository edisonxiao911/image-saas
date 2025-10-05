
import Greeting from "@/components/ui/Greeting";
import React from "react";
import { notFound } from "next/navigation";

// async function fetchUser(userid) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
//     if (!res.ok) {
//         return null;
//     }
//     const user = await res.json();
//     return user;
// }

// export default function UserPage() {
//     const router = useRouter();
//     const { id } = router.query;
//     return (<div>
//         <h1>这是第{id}个用户</h1>
//     </div>)
// }
// export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
//     const { id } = params;
//     const user = await fetchUser(id);
//     if (user == null) {
//         notFound();
//     }
//     return (<div>
//         <h1>name:{user.username}</h1>
//         <h1>phone:{user.phone}</h1>
//         <h1>email:{user.email}</h1>
//     </div>);
// }

// export default async function ProductPage() {
//     // 模拟延迟 3 秒加载数据
//     const data = await new Promise((resolve) =>
//         setTimeout(() => resolve([{ id: 1, name: "商品 A" }, { id: 2, name: "商品 B" }]), 3000)
//     );
//     return (
//         <div>
//             <h1>商品列表</h1>
//             <ul>
//                 {data.map(product => (
//                     <li key={product.id}>{product.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


const page = ({ params }) => {
    console.log('react version ', React.version);
    return <div>
        <h1>param 参数{params.id}</h1>
        <Greeting name="Edison"></Greeting>
    </div>;
}
export default page;
