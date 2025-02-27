import { request } from "../../requests";
import { FetchWalletTransactionsParams } from "./types";


export function WalletService() {
    const fetchWalletDetails = async (payload: FetchWalletTransactionsParams) => {
        const data = await request({
            path: `v1/merchant/wallet/ViewWalletTransaction?page=${payload.page ?? 1}`,
            method: "POST",
            body: payload,
        });
        return data;
    }
    return {
        fetchWalletDetails
    }
}