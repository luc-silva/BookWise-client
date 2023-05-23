import axios from "axios";
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
     * @returns Conclusion error.
     */
    public async loginUser(data: any) {
        return await axios
            .post(`${this.endpoint}login`, data)
            .then(({ data }) => {
                return data;
            });
    }

    /**
     * Register a user with given data.
     * @param data Object containg user data.
     * @returns Conclusion error.
     */
    public async registerUser(data: any) {
        return await axios.post(this.endpoint, data).then(({ data }) => {
            return data;
        });
    }
}
export default new UserService();
