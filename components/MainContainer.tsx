import CustomLink from "./CustomLink";
import React, {FC, ReactNode} from "react";
import Head from "next/head";

interface MainContainerProps {
    children: ReactNode;
    keywords?: string;
}

const MainContainer: FC<MainContainerProps> = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta name="keywords" content={"nextjs, typescript, " + keywords}/>
                <title>Nextjs + Typescript</title>
            </Head>
            <nav>
                <CustomLink href={"/"} text="Home"/>
                <CustomLink href={"/users"} text="Users list"/>
            </nav>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                nav {
                  background: cornflowerblue;
                  padding: 15px;
                }
            `}
            </style>
        </>

    )
};

export default MainContainer;
