export const createBookFormDefaultValues: BookDetails = {
    status: "",
    edition: "",
    franchise: "",
    description: "",
    title: "",
    book_author: "",
    tags: "",
    pages: 0,
    released_date: new Date(),
    store_url: "",
    volume: "",
};
export const bookDetailsDefaultValue: FetchedBookDetails = {
    ...createBookFormDefaultValues,
    user: "",
    _id: "",
    createdAt: new Date(),
    updatedAt: new Date()
};

export const userSessionDefaultValues = {
    username: "",
    token: "",
    id: "",
    isLogged: false,
};
export const loginFormDefaultValues = { email: "", password: "" };

export const registrationDefaultValue = {
    name: { first: "", last: "" },
    username: "",
    email: "",
    password: "",
};

export const bookCardDefaultValues: FetchedBookDetails = {
    ...createBookFormDefaultValues,
    user: "",
    _id: "",
    createdAt: new Date(),
    updatedAt: new Date()
};

export const statusPanelDefaultValues = {
    read: 0,
    not_read: 0,
    dropped: 0,
    total_read: 0,
};

export const statusOptions = [
    { value: "Not Read", text: "Not Read" },
    { value: "Read", text: "Read" },
    { value: "Dropped", text: "Dropped" },
];
