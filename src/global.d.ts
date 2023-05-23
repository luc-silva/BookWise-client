interface CustomInputFields {
    inputName: string;
    placeholder?: boolean;
    placeholderText?: string;
    label?: boolean;
    labelText?: string;
    onChange: React.ChangeEventHandler;
    isRequired?: boolean;
}
interface BookDetails {
    title: string;
    author: string;
    pages: number;
    tags: string;
    description: string;
    volume: string;
    franchise: string;
    edition: string;
    store_url: string;
    release_date: Date;
}

interface UserSession {
    token: string;
    isLogged: boolean;
}

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
