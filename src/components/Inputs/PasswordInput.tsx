export const PasswordInput = ({
    inputName,
    actualState,
    onChange,
    label,
    labelText,
    placeholderText,
    placeholder,
    isRequired,
}: CustomInputFields & {
    actualState: string;
}) => {
    return (
        <>
            {label && <label htmlFor={inputName}>{labelText}</label>}
            <input
                type="password"
                name={inputName}
                required={isRequired}
                value={actualState}
                onChange={onChange}
                placeholder={placeholder ? placeholderText : ""}
            />
        </>
    );
};
