import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"
import { BillCustomerInfoParams, BillInfoParams } from "@/utils/services/profile/types";


export const useFetchBillCustomerInfo = () => {
    const [data, setData] = useState<any>([]);
    const { isLoading, error, execute } = useApi();

    async function fetchBillCustomerInfo(params: BillCustomerInfoParams) {
        const response = await execute(async () => await ProfileService().fetchBillCustomerInformation(params))
        if (response) {
            setData(response?.Detail);
        }
    }

    return { isLoading, error, data, fetchBillCustomerInfo }
}