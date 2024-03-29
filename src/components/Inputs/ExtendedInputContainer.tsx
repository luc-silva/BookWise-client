import { InputContainer } from "./InputContainer";

export const ExtendedInputContainer = ({
    className,
    innerClassName,
    children,
    styles,
    innerStyles,
}: {
    className: string;
    innerClassName: string;
    children: JSX.Element[];
    styles?: React.CSSProperties;
    innerStyles?: React.CSSProperties;
}) => {
    return (
        <div style={styles} className={className}>
            {children.map((element, index) => {
                return (
                    <div className={innerClassName} key={index}>
                        {element}
                    </div>
                );
            })}
        </div>
    );
};
