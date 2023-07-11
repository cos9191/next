import Link from "next/link";
import MainContainer from "../components/MainContainer";
import {useEffect, useState} from "react";

interface User {
    id: number;
    name: string;
}
const UserList = ({users}: {users: User[]}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <MainContainer keywords={"Users list"}>
            <h1>Users list</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
)};

export default UserList;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return {
        props: {users},
        revalidate: 3600,
    };
}
