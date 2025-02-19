import axios from "axios";
import { BASE_URL } from "./constant";

interface RequestPropsInterface {
    url: string,
    data: any,
    method: "POST" | "GET" | "PATCH" | "DELETE" | "PUT"
}

const request = async (req: RequestPropsInterface) => {
    const url = `${BASE_URL}/${req.url}`
    try {
        let axiosRequest = await axios(url, {
            method: req.method,
            data: req.data,
            headers: {
                // "Authorization": token ? `Bearer ${token}` : undefined
            }
        })
        return axiosRequest;
    } catch (err) {
        throw err;
    }
}

export default request;