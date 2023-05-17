/**
 * TextInput component. It returns a fragment, so you can modify the label and input order freely.
 * @param inputName - The name of the input field.
 * @param actualState - The current value of the input field.
 * @param maxLength - The maximum length of the input field (optional).
 * @param minLength - The minimum length of the input field (optional).
 * @param onChange - The callback function to handle input changes.
 * @param label - Indicates whether to display a label for the input field (optional).
 * @param labelText - The text to display as the label for the input field (optional).
 * @param placeholderText - The text to display as the placeholder for the input field (optional).
 * @param placeholder - Indicates whether to display the placeholder text (optional).
 * @returns The TextInput component.
 */
export const TextInput = ({
    inputName,
    actualState,
    maxLenght,
    minLenght,
    onChange,
    label,
    labelText,
    placeholderText,
    placeholder,
}: CustomInputFields) => {
    return (
        <>
            {label && <label htmlFor={inputName}>{labelText}</label>}
            <input
                type="text"
                name={inputName}
                value={actualState}
                onChange={onChange}
                minLength={minLenght}
                maxLength={maxLenght}
                placeholder={placeholder ? placeholderText : ""}
            />
        </>
    );
};
