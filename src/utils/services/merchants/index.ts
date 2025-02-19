import { AddNewMerchantParams } from "./types"
import request from "../../requests";

export const MerchantService = () => {
    const addNewMerchant = async (payload: AddNewMerchantParams) => {
        const data = await request({
            url: `v1/merchant/BecomeMerchant`,
            method: "POST",
            data: payload,
        });
        return data;
    }
    return {addNewMerchant}
}
