import { useContext, useState } from "react"
import { useApi } from ".."
import { Profile } from "@/models/profile"
import UserContext from "@/context/UserContext"
import { ProfileService } from "@/utils/services/profile"
import { ActivateWalletParams, ActivateWalletResponse } from "@/utils/services/profile/types"


export const useActivateUserWallet = () => {
    const [data, setData] = useState<ActivateWalletResponse>({})
    const { isLoading, error, execute } = useApi();

    async function activateUserWallet(params: ActivateWalletParams) {
        const response = await execute(async () => await ProfileService().activateWallet(params))
        if (response) {
            setData(response);
        }
    }

    return { isLoading, error, data, activateUserWallet }
}