import { CreateBookForm } from "../components/Forms/CreateBookForm";
import styles from "./CreateBook.module.css";

export const CreateBook = ({user}:{user:UserSession}) => {
    return (
        <main className={styles["create-book"]}>
            <div className={styles["create-book__title"]}>
                <h2>Adicione um livro</h2>
            </div>
            <section className={styles["create-book__form"]}>
                <CreateBookForm user={user} />
            </section>
        </main>
    );
};
