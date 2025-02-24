import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"


export const useFetchAvailableBills = () => {
    const [data, setData] = useState<any>([]);
    const { isLoading, error, execute } = useApi();

    async function fetchAvailableBillOptions() {
        const response = await execute(async () => await ProfileService().fetchAvailableBills())
        if (response) {
            setData(response.Bills.data);
        }
    }

    return { isLoading, error, data, fetchAvailableBillOptions }
}