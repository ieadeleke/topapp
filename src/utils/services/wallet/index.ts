import request from "../../requests";
import { FetchWalletTransactionsParams } from "./types";


export function WalletService() {
    const fetchWalletDetails = async (payload: FetchWalletTransactionsParams) => {
        const data = await request({
            url: `v1/SubAgent/GetSubAgents?page=${payload.page ?? 1}`,
            method: "GET",
            data: payload,
        });
        return data;
    }
    return {
        fetchWalletDetails
    }
}