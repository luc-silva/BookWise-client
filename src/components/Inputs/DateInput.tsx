export const DateInput = ({
    inputName,
    onChange,
    label,
    labelText,
    placeholderText,
    placeholder,
    isRequired = true,
    actualState
}: CustomInputFields & {actualState:string}) => {
    return (
        <>
            {label && <label htmlFor={inputName}>{labelText}</label>}
            <input
                type="date"
                name={inputName}
                onChange={onChange}
                required={isRequired}
                value={actualState}
                placeholder={placeholder ? placeholderText : ""}
            />
        </>
    );
};
