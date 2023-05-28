import { RegistrationForm } from "../components/Forms/RegistrationForm";
import styles from "./Registration.module.css";
export const Registration = ({
    setToastMessage,
    toggleToast,
}: {
    toggleToast: Function;
    setToastMessage: Function;
}) => {
    return (
        <main className={styles["registration"]}>
            <div className={styles["registration__main"]}>
                <div className={styles["registration__title"]}>
                    <h2>Create Account</h2>
                </div>
                <div className={styles["registration__form"]}>
                    <RegistrationForm
                        setToastMessage={setToastMessage}
                        toggleToast={toggleToast}
                    />
                </div>
            </div>
        </main>
    );
};
