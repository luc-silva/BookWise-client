import axios from "axios";
import { Service } from "./Service";

/**
 * Class responsible for the http requests related to books entities
 */
class BookService extends Service {
    /**
     * Entity endpoint
     */
    private ending_point = this.base_url + "book";

    /**
     * Creates a book instance with given data.
     * @param data Object containing the book data.
     * @param token User session auth token.
     * @returns Result of the http request
     */
    public async createBook(data: any, token: string): Promise<any> {
        return await axios.post(
            this.ending_point,
            data,
            this.createHeaders(token)
        );
    }

    /**
     * Get details of a book with given book id.
     * @param bookId Book id.
     * @param token User session auth token.
     * @returns Book details
     */
    public async getUserBookById(bookId: string, token: string): Promise<any> {
        return await axios.get(
            `${this.ending_point}/${bookId}`,
            this.createHeaders(token)
        );
    }
}

export default new BookService();
