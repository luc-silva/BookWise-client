import { useEffect } from "react";
import { CreateBookForm } from "../components/Forms/CreateBookForm";
import { RedirectUser } from "../utils/tools";
import BookService from "../Services/BookService";
import styles from "./CreateBook.module.css";
import { useNavigate } from "react-router-dom";

export const CreateBook = ({
    user,
    setToastMessage,
    toggleToast,
}: {
    user: UserSession;
    toggleToast: Function;
    setToastMessage: Function;
}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.isLogged) {
            navigate("/login");
        }
    });
    return (
        <>
            <RedirectUser user={user} />
            <main className={styles["create-book"]}>
                <div className={styles["create-book__title"]}>
                    <h2>Adicione um livro</h2>
                </div>
                <section className={styles["create-book__form"]}>
                    <CreateBookForm
                        user={user}
                        setToastMessage={setToastMessage}
                        toggleToast={toggleToast}
                    />
                </section>
            </main>
        </>
    );
};
