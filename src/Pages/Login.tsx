import { ChangeEvent, FormEvent, useState } from "react";
import { InputContainer } from "../components/Inputs/InputContainer";
import { PasswordInput } from "../components/Inputs/PasswordInput";
import { TextInput } from "../components/Inputs/TextInput";
import { useNavigate } from "react-router-dom";
import { loginFormInitialValues } from "../constants/defaultValues";
import UserService from "../Services/UserService";
import { AxiosError } from "axios";
import styles from "./Login.module.css";

export const Login = ({
    setUser,
    user,
    toggleToast,
    setToastMessage,
}: {
    user: UserSession;
    setUser: Function;
    toggleToast: Function;
    setToastMessage: Function;
}) => {
    let [form, setForm] = useState(loginFormInitialValues);
    const navigate = useNavigate();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        let target = event.target;
        setForm({ ...form, [target.name]: target.value });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        await UserService.loginUser(form)
            .then((data: { id: string; token: string }) => {
                setUser({ ...user, ...data, isLogged: true });
                navigate("/bookshelf");
            })
            .catch(({ response }) => {
                toggleToast(true);
                setToastMessage(response.data.message);
            });
    }
    return (
        <main className={styles["login"]}>
            <div className={styles["login-form__container"]}>
                <div className={styles["login-form__title"]}>
                    <h2>Log in</h2>
                </div>
                <form
                    method="POST"
                    className={styles["login-form"]}
                    onSubmit={handleSubmit}
                >
                    <InputContainer className={styles["input-container"]}>
                        <TextInput
                            label
                            labelText="Email"
                            placeholder
                            placeholderText="joe.doe@user.com"
                            actualState={form.email}
                            inputName="email"
                            maxLenght={30}
                            onChange={handleChange}
                            isRequired
                        />
                    </InputContainer>
                    <InputContainer className={styles["input-container"]}>
                        <PasswordInput
                            isRequired
                            label
                            labelText="Password"
                            placeholder
                            placeholderText="123"
                            actualState={form.password}
                            inputName="password"
                            onChange={handleChange}
                        />
                    </InputContainer>
                    <div>
                        <input type="submit" className={styles["submit-btn"]} />
                    </div>
                </form>
            </div>
        </main>
    );
};
