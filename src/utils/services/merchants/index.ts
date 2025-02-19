import { AddNewMerchantParams } from "./types"
import { request } from "../../request";

export const MerchantService = () => {
    const addNewMerchant = async (payload: AddNewMerchantParams) => {
        const data = await request({
            path: `v1/merchant/BecomeMerchant`,
            method: "POST",
            body: payload,
        });
        return data;
    }
    return { addNewMerchant }
}
