import { ChangeEvent, FormEvent, useState } from "react";
import { ExtendedInputContainer } from "../Inputs/ExtendedInputContainer";
import { InputContainer } from "../Inputs/InputContainer";
import { PasswordInput } from "../Inputs/PasswordInput";
import { TextInput } from "../Inputs/TextInput";
import { useNavigate } from "react-router-dom";
import { registrationFormInitialValue } from "../../constants/defaultValues";
import UserService from "../../Services/UserService";
import styles from "./RegistrationForm.module.css";

export const RegistrationForm = ({
    setToastMessage,
    toggleToast,
}: {
    toggleToast: Function;
    setToastMessage: Function;
}) => {
    let [form, setForm] = useState(registrationFormInitialValue);
    const navigate = useNavigate();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        let target = event.target;
        if (target.name === "last" || target.name === "first") {
            setForm({
                ...form,
                name: { ...form.name, [target.name]: target.value },
            });
        } else {
            setForm({ ...form, [target.name]: target.value });
        }
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        UserService.registerUser(form)
            .then((data) => {
                navigate("/login");
            })
            .catch(({ response }) => {
                toggleToast(true);
                setToastMessage(response.data.message);
            });
    }

    return (
        <form
            action="POST"
            onSubmit={handleSubmit}
            className={styles["registration-form"]}
        >
            <InputContainer className={styles["input-container"]}>
                <TextInput
                    placeholder
                    placeholderText="jorge@user.com"
                    label
                    labelText="Email"
                    actualState={form.email}
                    inputName="email"
                    maxLenght={30}
                    onChange={handleChange}
                    isRequired
                />
            </InputContainer>
            <ExtendedInputContainer
                innerClassName={styles["input-container"]}
                className={styles["extended-input-container"]}
            >
                <TextInput
                    placeholder
                    placeholderText="Jorge"
                    label
                    labelText="First Name"
                    actualState={form.name.first}
                    inputName="first"
                    maxLenght={30}
                    onChange={handleChange}
                    key={"first"}
                    isRequired
                />
                <TextInput
                    placeholder
                    placeholderText="Silva"
                    label
                    labelText="Last Name"
                    actualState={form.name.last}
                    inputName="last"
                    maxLenght={30}
                    key={"last"}
                    onChange={handleChange}
                />
            </ExtendedInputContainer>
            <InputContainer className={styles["input-container"]}>
                <TextInput
                    placeholder
                    placeholderText="jorge.sil"
                    label
                    labelText="Username"
                    actualState={form.username}
                    inputName="username"
                    maxLenght={15}
                    onChange={handleChange}
                />
            </InputContainer>
            <InputContainer className={styles["input-container"]}>
                <PasswordInput
                    placeholder
                    placeholderText="123"
                    label
                    labelText="Password"
                    actualState={form.password}
                    inputName="password"
                    onChange={handleChange}
                />
            </InputContainer>
            <div>
                <input type="submit" className={styles["submit-btn"]} />
            </div>
        </form>
    );
};
