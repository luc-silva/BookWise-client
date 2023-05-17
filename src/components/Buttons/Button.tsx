import { MouseEventHandler, useEffect, useState } from "react";
import styles from "./Button.module.css";

export const Button = ({
    onClick,
    text,
    type,
}: {
    text: string;
    type: "action" | "remove";
    onClick: MouseEventHandler;
}) => {
    let [actualStyle, setActualStyle] = useState(styles["button"]);
    useEffect(() => {
        if (type === "action") {
            let style = [styles["button"], styles["button-action"]].join(" ");
            setActualStyle(style);
        } else {
            let style = [styles["button"], styles["button-delete"]].join(" ");
            setActualStyle(style);
        }
    }, [type]);
    return (
        <button className={actualStyle} onClick={onClick}>
            {text}
        </button>
    );
};
