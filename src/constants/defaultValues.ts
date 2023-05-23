export const createBookFormDefaultValues: BookDetails = {
    status: "",
    edition: "",
    franchise: "",
    description: "",
    title: "",
    author: "",
    tags: "",
    pages: 0,
    release_date: new Date(),
    store_url: "",
    volume: "",
};

export const userSessionDefaultValues = {
    username: "",
    token: "",
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
};
