import styles from "../../styles/user.module.scss";
import React from "react";
import MainContainer from "../../components/MainContainer";

interface User {
    id: number;
    name: string;
}
export default function Id({user}: { user: User }) {

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>User card</h1>
                <ul>
                    <li>ID: {user.id}</li>
                    <li>Name: {user.name}</li>
                </ul>
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}: any) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: {user},
    };
}
