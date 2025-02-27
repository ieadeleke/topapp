import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"
import { BillInfoParams } from "@/utils/services/profile/types";


export const useFetchAvailableBillerInfo = () => {
    const [data, setData] = useState<any>([]);
    const { isLoading, error, execute } = useApi();

    async function fetchAvailableBillerInfo(params: BillInfoParams) {
        const response = await execute(async () => await ProfileService().fetchBillInformation(params))
        if (response) {
            setData(response?.Bills?.data);
        }
    }

    return { isLoading, error, data, fetchAvailableBillerInfo }
}