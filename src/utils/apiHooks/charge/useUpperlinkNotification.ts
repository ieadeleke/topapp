import { useState } from "react"
import { useApi } from "../index"
import { ChargeService } from "@/utils/services/charge"
import { Payment } from "@/models/payment"
import { UpperLinkPaymentNotificationParams } from "@/utils/services/charge/types"
import { errorHandler } from "@/utils/errorHandler"
import { useRouter } from "next/navigation"

export const useUpperlinkNotification = () => {
    const [data, setData] = useState<(Payment & { ReceiptNumber: string }) | null>(null)
    const { isLoading, execute } = useApi()
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    async function upperlinkNotification({ type, apiKey, ...params }: UpperLinkPaymentNotificationParams & {
        type?: "regular" | "mda",
        apiKey?: string,
    }) {
        setData(null)
        setError(null)
        const response = await execute(async () => {
            if (type == 'mda') {
               return await ChargeService().mdaPaymentNotification({
                    ...params,
                    apiKey: apiKey!!
                })
            } else return await ChargeService().flutterwaveNotification(params)
        }, {
            onError(error) {
                const parsedError = errorHandler(error)
                if (parsedError.status == 402) {
                    setError("Payment failed")
                    setTimeout(() => {
                        router.replace(`/payment/collection`)
                    }, 1000)
                } else {
                    setError(parsedError.message)
                }
            },
        })
        if (response) {
            setData({ ...response.payload, ReceiptNumber: response.ReceiptNumber })
        }
    }

    return { isLoading, error, data, upperlinkNotification }
}