import { useContext, useState } from "react"
import { useApi } from ".."
import { Profile } from "@/models/profile"
import UserContext from "@/context/UserContext"
import { ProfileService } from "@/utils/services/profile"
import { UpdateBusinessProfileParams, UpdateProfileParams } from "@/utils/services/profile/types"


export const useUpdateProfile = () => {
    const [data, setData] = useState<Profile | null>(null)
    const { isLoading, error, execute } = useApi()
    const { updateUser, user } = useContext(UserContext)

    async function updateProfile(params: UpdateBusinessProfileParams) {
        setData(null)
        const response = await execute(async () => await ProfileService().updateBusinessProfile(params))
        if(response){
            setData(response.MerchantProfile);
            // updateUser(response.profile);
        }
        setData(user)
    }

    return { isLoading, error, data, updateProfile }
}