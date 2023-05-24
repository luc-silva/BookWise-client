import { MouseEventHandler, useEffect, useState } from "react";
import styles from "./Button.module.css";

export const Button = ({
    onClick,
    text,
    type = "action" ,
    fullWidth
}: {
    text: string;
    type?: "action" | any;
    onClick: MouseEventHandler;
    fullWidth?:boolean
}) => {
    let [actualStyle, setActualStyle] = useState(styles["button"]);
    let [actualWidth, setActualWidth] = useState("")
    useEffect(() => {
        if (type === "action") {
            let style = [styles["button"], styles["button-action"]].join(" ");
            setActualStyle(style);
        } else {
            let style = [styles["button"], styles["button-delete"]].join(" ");
            setActualStyle(style);
        }
    }, [type]);
    useEffect(() => {
        if(fullWidth){
            setActualWidth("100%")
        } else {
            setActualWidth("")
        }
    }, [fullWidth])
    return (
        <button style={{width: actualWidth}} className={actualStyle} onClick={onClick}>
            {text}
        </button>
    );
};
