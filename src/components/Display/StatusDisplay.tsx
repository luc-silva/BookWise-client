import { useEffect, useState } from "react";
import { statusPanelInitialValues } from "../../constants/defaultValues";
import UserService from "../../Services/UserService";
import styles from "./StatusDisplay.module.css";

export const StatusDisplay = ({ user }: { user: UserSession }) => {
    let [data, setData] = useState(statusPanelInitialValues);

    useEffect(() => {
        if (user.id) {
            UserService.getUserStatus(user.id, user.token).then(setData);
        }
    }, [user.id]);
    return (
        <div className={styles["status-panel"]}>
            <div className={styles["status-panel__details"]}>
                <p>Read: {data.read}</p>
                <p>Not Read: {data.not_read}</p>
                <p>Dropped: {data.dropped}</p>
            </div>
            <div className={styles["status-panel__total"]}>
                <p>Percentage of books read:</p>
                <strong>{`${data.total_read}%`}</strong>
            </div>
        </div>
    );
};
