import { useState } from "react"
import { useApi } from "../index"
import { ChargeService } from "@/utils/services/charge"
import { Payment } from "@/models/payment"
import { InitiatePaymentWithUpperLinkParams } from "@/utils/services/charge/types"

export const useInitiatePaymentWithUpperlink = () => {
    const [data, setData] = useState<Payment | null>(null)
    const { isLoading, error, execute } = useApi()

    async function initiatePaymentWithUpperlink({ type, apiKey, ...params }: InitiatePaymentWithUpperLinkParams & {
        type?: "regular" | "mda",
        apiKey?: string,
    }) {
        setData(null)
        const response = await execute(async () => {
            if (type == 'mda') {
                return await ChargeService().initiateMDAPayment({
                    ...params,
                    apiKey: apiKey!!
                })
            } else return await ChargeService().initiatePaymentWithFlutterwave(params)
        })
        if (response) {
            setData(response.Transaction)
        }
    }

    return { isLoading, error, data, initiatePaymentWithUpperlink }
}