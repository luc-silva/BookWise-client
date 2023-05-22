import styles from "./StatusDisplay.module.css";

export const StatusDisplay = () => {
    let data = {
        read:3,
        not_read:4,
        dropped:0,
        total_read:40,
        
    }
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
