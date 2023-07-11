import Link from "next/link";
import styles from "../styles/link.module.css";
import {FC, PropsWithChildren} from "react";
interface LinkProps {
    text: string,
    href: string
}
const CustomLink: FC<PropsWithChildren<LinkProps>> = ({text, href}: LinkProps) => {
    return (
        <Link className={styles.link} href={href}>
            {text}
        </Link>
    )
};

export default CustomLink;
