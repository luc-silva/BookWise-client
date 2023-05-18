export const FileInput = ({
    inputName,
    onChange,
    label,
    labelText,
    placeholderText,
    placeholder,
    isRequired = true,
    acceptedExtensions,
}: CustomInputFields & {
    acceptedExtensions: string;
}) => {
    return (
        <>
            {label && <label htmlFor={inputName}>{labelText}</label>}
            <input
                type="file"
                name={inputName}
                accept={acceptedExtensions}
                onChange={onChange}
                placeholder={placeholder ? placeholderText : ""}
                required={isRequired}
            />
        </>
    );
};
