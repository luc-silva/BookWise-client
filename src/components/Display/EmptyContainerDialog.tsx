import styles from "./EmptyContainerDialog.module.css";

export const EmptyContainerDialog = ({ message }: { message: string }) => {
    return <p className={styles["message"]}>{message}</p>;
};
