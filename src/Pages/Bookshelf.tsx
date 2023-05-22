import { BookshelfContainer } from "../components/Containers/BookshelfContainer";
import { StatusDisplay } from "../components/Display/StatusDisplay";
import styles from "./Bookshelf.module.css";

export const Bookshelf = ({user}:{user:UserSession}) => {
    return (
        <main className={styles["bookshelf"]}>
            <div className={styles["bookshelf__main"]}>
                <div className={styles["bookshelf__main__title"]}>
                    <h2>Bookshelf</h2>
                </div>
            </div>
            <div className={styles["bookshelf__status"]}>
                <StatusDisplay />
            </div>
            <section className={styles["bookshelf__container__main"]}>
                <div className={styles["bookshelf__container"]}>
                    <BookshelfContainer userToken={user.token}/>
                </div>
            </section>
        </main>
    );
};
