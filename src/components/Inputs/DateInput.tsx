import { format } from "date-fns";

export const DateInput = ({
    inputName,
    onChange,
    label,
    labelText,
    placeholderText,
    placeholder,
    isRequired = true,
    actualState
}: CustomInputFields & {actualState:Date}) => {
    return (
        <>
            {label && <label htmlFor={inputName}>{labelText}</label>}
            <input
                type="date"
                name={inputName}
                onChange={onChange}
                required={isRequired}
                value={format(new Date(actualState), "yyyy-MM-dd")}
                placeholder={placeholder ? placeholderText : ""}
            />
        </>
    );
};
