

export default async function Users() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        { next: { revalidate: 60 } }
    );
    const users = await res.json();

    return (
        <div>
            <h1>用户列表</h1>
            <ul>
                {
                    users.map(
                        (user: { id: number, name: string, username: string }) => (
                            <li style={{ color: "red" }} key={user.id}><h3>{user.name}---{user.username}</h3></li>
                        )
                    )
                }
            </ul>

        </div>
    );
}