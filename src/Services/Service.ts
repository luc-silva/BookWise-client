import { AxiosRequestConfig } from "axios";

/**
 * Base class to HTTP request services.
 */
export abstract class Service {
    /**
     * base url for the REST API.
     */
    protected base_url = "http://localhost:600/api/v1/"

    /**
     * Create an header containing a bearer auth with the provide user token.
     * @param userToken User bearer token
     * @returns Axios Request Config object containing the bearer auth
     */
    protected createHeaders(userToken: string): AxiosRequestConfig {
        return { headers: { Authorization: `Bearer ${userToken}` } };
    }
}
