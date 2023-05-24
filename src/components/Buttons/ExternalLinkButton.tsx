import { Link } from "react-router-dom";
import styles from "./ExternalLinkButton.module.css";
import { useEffect, useState } from "react";

export const ExternalLinkButton = ({
    filled =false,
    href,
    buttonText,
    targetSelf = false,
}: {
    filled?:boolean
    href: string;
    buttonText: string;
    targetSelf?: boolean;
}) => {
    let [actualStyle, setActualStyle] = useState(styles["button"]);
    useEffect(() => {
        if (filled) {
            let style = [styles["button"], styles["filled"]].join(" ");
            setActualStyle(style);
        } else {
            let style =  styles["button"] 
            setActualStyle(style);
        }
    }, [filled]);
    return (
        <Link to={href} target={targetSelf ? "_self" : "_blank"} className={actualStyle}>
            {buttonText}
        </Link>
    );
};
