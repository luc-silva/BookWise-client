import axios, { AxiosError } from "axios";
import { Service } from "./Service";

/**
 * Class responsible for the http requests related to user entities.
 */
class UserService extends Service {
    /**
     * Entity endpoint.
     */
    private endpoint = this.base_url + "user/";

    /**
     * Login a user with given data.
     * @param data Object containg user data.
     * @returns Conclusion message.
     */
    public async loginUser(data: any) {
        return await axios
            .post(`${this.endpoint}login`, data)
            .then(({ data }) => {
                return data;
            })
            
    }

    /**
     * Register a user with given data.
     * @param data Object containg user data.
     * @returns Conclusion message.
     */
    public async registerUser(data: any) {
        return await axios.post(this.endpoint, data).then(({ data }) => {
            return data;
        });
    }
    /**
     * Get user books IDs.
     * @param token User auth token.
     * @returns Array of book IDs.
     */
    public async getUserBooks(userToken: string) {
        return await axios
            .get(`${this.endpoint}/books`, this.createHeaders(userToken))
            .then(({ data }) => {
                return data;
            });
    }

    public async getUserStatus(userId: string, userToken: string) {
        return await axios
            .get(
                `${this.endpoint}${userId}/status`,
                this.createHeaders(userToken)
            )
            .then(({ data }) => {
                return data;
            });
    }
}
export default new UserService();
