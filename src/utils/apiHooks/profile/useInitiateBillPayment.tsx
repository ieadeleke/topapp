import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"
import { BillCustomerInfoParams, BillInfoParams, BillPaymentParams } from "@/utils/services/profile/types";


export const useInitiateBillPayment = () => {
    const [data, setData] = useState<any>([]);
    const { isLoading, error, execute } = useApi();

    async function initiateBillPayment(params: BillPaymentParams) {
        const response = await execute(async () => await ProfileService().initiateCustomerBillPayment(params))
        if (response) {
            setData(response);
        }
    }

    return { isLoading, error, data, initiateBillPayment }
}
