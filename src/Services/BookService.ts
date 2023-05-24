import axios from "axios";
import { Service } from "./Service";

/**
 * Class responsible for the http requests related to books entities
 */
class BookService extends Service {
    /**
     * Entity endpoint
     */
    private endpoint = this.base_url + "book";

    /**
     * Creates a book instance with given data.
     * @param data Object containing the book data.
     * @param token User session auth token.
     * @returns Result of the http request
     */
    public async createBook(data: any, token: string): Promise<any> {
        return await axios.post(this.endpoint, data, this.createHeaders(token));
    }

    /**
     * Get details of a book with given book id.
     * @param bookId Book id.
     * @param token User session auth token.
     * @returns Book details
     */
    public async getBookDetails(bookId: string, token: string) {
        return await axios
            .get(`${this.endpoint}/${bookId}`, this.createHeaders(token))
            .then(({ data }) => {
                return data;
            });
    }

    /**
     * Delete a book with given book id.
     * @param bookId Book Id.
     * @param token User session auth token.
     */
    public async deleteBook(bookId: string, token: string) {
        return await axios
            .delete(`${this.endpoint}/${bookId}`, this.createHeaders(token))
            .then(({ data }) => {
                return data;
            });
    }
}

export default new BookService();
