import { useEffect, useState } from "react";
import styles from "./Toast.module.css";

export const Toast = ({
    message,
    isActive,
    toggleStateFunction,
}: {
    message:string
    isActive: boolean;
    toggleStateFunction: Function;
}) => {
    useEffect(() => {
        if (isActive) {
            let timer = setTimeout(() => {
                toggleStateFunction(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isActive]);

    if (!isActive) return null;
    return (
        isActive && (
            <div className={styles["toast"]}>
                <p>{message}</p>
            </div>
        )
    );
};
