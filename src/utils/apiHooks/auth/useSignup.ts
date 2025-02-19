import { useContext, useState } from "react"
import { useApi } from ".."
import { LoginParams, SignUpParams } from "@/utils/services/auth/types"
import { Profile } from "@/models/profile"
import { AuthService } from "@/utils/services/auth"
import UserContext from "@/context/UserContext"
import AuthToken from "@/utils/AuthToken"


export const useSignup = () => {
    const [data, setData] = useState<Profile | null>(null)
    const { isLoading, error, execute } = useApi()
    const { updateUser } = useContext(UserContext)

    async function signup(params: SignUpParams) {
        setData(null)
        const response = await execute(async () => await AuthService().signup(params))
        if (response) {
            // setData(response.message)
        }
    }

    return { isLoading, error, data, signup }
}