import { MerchantService } from "@/utils/services/merchants";
import { AddNewMerchantParams } from "@/utils/services/merchants/types";
import { useState } from "react";
import { useApi } from "..";

const useAddNewMerchant = () => {
    const [data, setData] = useState();
    const { isLoading, error, execute } = useApi();
    const addNewMerchant = async (params: AddNewMerchantParams) => {
        let walletData = await execute(() => MerchantService().addNewMerchant(params));
        setData(walletData?.data);
        if (data) {
            console.log(data)
        } else {
            console.log(error)
        }
    }

    return { addNewMerchant, data, isLoading, error };
}

export default useAddNewMerchant;