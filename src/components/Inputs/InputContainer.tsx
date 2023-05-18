export const InputContainer = ({
    className,
    children,
    styles,
}: {
    className: string;
    children: JSX.Element;
    styles?: React.CSSProperties;
}) => {
    return (
        <div style={styles} className={className}>
            {children}
        </div>
    );
};
