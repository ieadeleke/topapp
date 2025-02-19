import { useState } from "react"
import { useApi } from "../index"
import { ChargeService } from "@/utils/services/charge"
import { VerifyReferenceParams } from "@/utils/services/charge/types"
import { Reference } from "@/models/reference"

export const useVerifyReference = () => {
    const [data, setData] = useState<Reference | null>(null)
    const { isLoading, error, execute } = useApi()

    async function verifyReference({ type, apiKey, ...params }: VerifyReferenceParams & {
        type?: "regular" | "mda",
        apiKey?: string,
    }) {
        setData(null)
        const response = await execute(async () => {
            if (type == 'mda') {
                return await ChargeService().verifyMDAReference({
                    ...params,
                    apiKey: apiKey!!
                })
            } else return await ChargeService().verifyReference(params)
        })
        if (response) {
            setData(response)
        }
    }

    return { isLoading, error, data, verifyReference }
}