export const TextareaInput = ({
    inputName,
    actualState,
    maxLenght,
    minLenght = 0,
    onChange,
    label,
    labelText,
    placeholderText,
    placeholder,
    isRequired,
}: CustomInputFields & { maxLenght: number; minLenght?: number }) => {
    return (
        <>
            {label && <label htmlFor={inputName}>{labelText}</label>}
            <textarea
                name={inputName}
                required={isRequired}
                value={actualState}
                onChange={onChange}
                minLength={minLenght}
                maxLength={maxLenght}
                placeholder={placeholder ? placeholderText : ""}
                style={{ resize: "none" }}
            />
        </>
    );
};
