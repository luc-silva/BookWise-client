export const SelectInput = ({
    inputName,
    onChange,
    label,
    labelText,
    placeholderText,
    placeholder,
    isRequired = false,
    actualValue,
    arrOfOptions,
    isFirstDefault,
}: CustomInputFields & {
    actualValue: any;
    arrOfOptions: { text: string; value: any }[];
    isFirstDefault?: boolean;
}) => {
    return (
        <>
            {label && <label htmlFor={inputName}>{labelText}</label>}
            <select
                name={inputName}
                value={actualValue}
                onChange={onChange}
                required={isRequired}
            >
                {/* {isFirstDefault && (
                        <option value={arrOfOptions[0].value} defaultValue>
                            {arrOfOptions[0].text}
                        </option>
                    ) &&
                    arrOfOptions.splice(0).map(({ text, value }) => {
                        return <option value={value}>{text}</option>;
                    })} */}

                {!isFirstDefault &&
                    arrOfOptions.map(({ text, value }) => {
                        return <option value={value}>{text}</option>;
                    })}
            </select>
        </>
    );
};
