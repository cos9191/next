import Link from "next/link";
import MainContainer from "../components/MainContainer";

interface User {
    id: number;
    name: string;
}
const UserList = ({users}: {users: User[]}) => {

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
    };
}
