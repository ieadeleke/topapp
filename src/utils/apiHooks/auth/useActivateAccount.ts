import { useContext, useState } from "react"
import { useApi } from ".."
import { ActivatePasswordParams, LoginParams } from "@/utils/services/auth/types"
import { Profile } from "@/models/profile"
import { AuthService } from "@/utils/services/auth"
import UserContext from "@/context/UserContext"
import AuthToken from "@/utils/AuthToken"


export const useActivateAccount = () => {
    const [data, setData] = useState<Profile | null>(null)
    const { isLoading, error, execute } = useApi()
    const { updateUser } = useContext(UserContext)

    async function activateAccount(params: ActivatePasswordParams) {
        setData(null)
        const response = await execute(async () => await AuthService().activateAccount(params))
        if (response) {
            setData(response.data)
        }
    }

    return { isLoading, error, data, activateAccount }
}