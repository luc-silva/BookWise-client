//Initial values for react components
/**
 * Book basic details for inputs
 */
export const bookDetailsInitialValues: BookDetails = {
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

/**
 * Book basic details, including database fields
 */
export const fetchedBookDetailsInitialValue = {
    ...bookDetailsInitialValues,
    user: "",
    _id: "",
    createdAt: new Date(),
    updatedAt: new Date(),
};

/**
 * Image fields
 */
export const imageDataInitialValues: BookImageData = {
    _id: "",
    buffer: {
        data: [1, 2],
    },
};

/**
 * Book object, including its image.
 */
export const bookDataInitialValues: FetchedBookDetails = {
    bookDetails: {
        ...fetchedBookDetailsInitialValue,
    },
    image: { ...imageDataInitialValues },
};

/**
 * Session object initial state
 */
export const userSessionInitialValues = {
    username: "",
    token: "",
    id: "",
    isLogged: false,
};

/**
 * Login form inputs initial values
 */
export const loginFormInitialValues = { email: "", password: "" };

/**
 * Registration form inputs initial values
 */
export const registrationFormInitialValue = {
    name: { first: "", last: "" },
    username: "",
    email: "",
    password: "",
};

/**
 * Status panel initial state
 */
export const statusPanelInitialValues = {
    read: 0,
    not_read: 0,
    dropped: 0,
    total_read: 0,
};

/**
 * Component status initial state
 */
export const componentStatusInitialValues = {
    isLoading: true,
    isError: false,
};

//Misc
/**
 * Options available for book status field
 */
export const statusOptions = [
    { value: "Not Read", text: "Not Read" },
    { value: "Read", text: "Read" },
    { value: "Dropped", text: "Dropped" },
];
