import { useContext, useState } from "react"
import { useApi } from ".."
import { Profile } from "@/models/profile"
import UserContext from "@/context/UserContext"
import { ProfileService } from "@/utils/services/profile"
import { ActivateWalletParams, ActivateWalletResponse, AvailableBillResponse } from "@/utils/services/profile/types"


export const useFetchAvailableBills = () => {
    const [data, setData] = useState<AvailableBillResponse>()
    const { isLoading, error, execute } = useApi();

    async function fetchAvailableBillOptions() {
        const response = await execute(async () => await ProfileService().fetchAvailableBills())
        if (response) {
            console.log(response);
            setData(response);
        }
    }

    return { isLoading, error, data, fetchAvailableBillOptions }
}