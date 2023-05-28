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
    status: string;
    title: string;
    book_author: string;
    pages: number;
    tags: string;
    description: string;
    volume: string;
    franchise: string;
    edition: string;
    store_url: string;
    released_date: Date;
}
interface BookImageData{
    _id:string
    buffer:{
        data: number[]
    }
}
interface FetchedBookDetails {
    bookDetails: BookDetails & {
        _id: string;
        user: string;
        createdAt: Date;
        updatedAt: Date;
    };
    image: BookImageData;
}
interface UserSession {
    token: string;
    id: string;
    isLogged: boolean;
}

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
