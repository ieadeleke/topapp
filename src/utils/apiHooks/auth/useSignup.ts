import { useContext, useState } from "react"
import { useApi } from ".."
import { LoginParams, SignUpParams, SignUpResponseParams } from "@/utils/services/auth/types"
import { Profile } from "@/models/profile"
import { AuthService } from "@/utils/services/auth"
import UserContext from "@/context/UserContext"
import AuthToken from "@/utils/AuthToken"


export const useSignup = () => {
    const [data, setData] = useState<SignUpResponseParams>({
        message: "",
        status: ""
    })
    const { isLoading, error, execute } = useApi()
    const { updateUser } = useContext(UserContext)

    async function signup(params: SignUpParams) {
        setData({
            message: "",
            status: ""
        })
        const response = await execute(async () => await AuthService().signup(params))
        if (response) {
            setData({
                message: response.message,
                status: response.status
            })
        }
    }

    return { isLoading, error, data, signup }
}