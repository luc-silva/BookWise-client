interface CustomInputFields {
    inputName:string
    placeholder?: boolean;
    placeholderText?: string;
    label?: boolean;
    labelText?: string;
    maxLenght: number;
    minLenght: number;
    onChange: React.ChangeEventHandler;
    actualState: string;
}

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
