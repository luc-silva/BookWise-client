/**
 * TextInput component. It returns a fragment, so you can modify the label and input order freely.
 * @param inputName - The name of the input field.
 * @param actualState - The current value of the input field.
 * @param maxValue - The maximum value of the input field (optional).
 * @param minValue - The minimum value of the input field (optional).
 * @param onChange - The callback function to handle input changes.
 * @param label - Indicates whether to display a label for the input field (optional).
 * @param labelText - The text to display as the label for the input field (optional).
 * @param placeholderText - The text to display as the placeholder for the input field (optional).
 * @param placeholder - Indicates whether to display the placeholder text (optional).
 * @returns The TextInput component.
 */
export const NumberInput = ({
    inputName,
    actualState,
    maxValue,
    minValue = 0,
    onChange,
    label,
    labelText,
    placeholderText,
    placeholder,
    isRequired = true,
}: CustomInputFields & {
    maxValue: number;
    minValue?: number;
    actualState: number;
}) => {
    return (
        <>
            {label && <label htmlFor={inputName}>{labelText}</label>}
            <input
                type="number"
                name={inputName}
                value={actualState}
                onChange={onChange}
                min={minValue}
                max={maxValue}
                placeholder={placeholder ? placeholderText : ""}
                required={isRequired}
            />
        </>
    );
};
