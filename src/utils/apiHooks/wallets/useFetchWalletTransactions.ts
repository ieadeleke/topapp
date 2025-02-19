import { WalletService } from "@/utils/services/wallet"
import { useState } from "react";

const useFetchWalletTransactions = () => {
    const [data, setData] = useState();
    const fetchWalletDetails = async () => {
        try {
            let walletData = await WalletService().fetchWalletDetails({});
            setData(walletData.data);
        } catch (err) {

        }
    }

    return { fetchWalletDetails, data };
}

export default useFetchWalletTransactions;