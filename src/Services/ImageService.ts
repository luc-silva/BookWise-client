import axios from "axios";
import { Service } from "./Service";

class ImageService extends Service {
    private endpoint = `${this.base_url}image`;

    public async getImage(imageId: string, token: string) {
        return await axios
            .get(`${this.endpoint}/${imageId}`, this.createHeaders(token))
            .then(({ data }) => {
                return data;
            });
    }
}

export default new ImageService();
