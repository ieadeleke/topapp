
import useSelector from "../utils/useSelector";


export function useChatHistorySelector(): any[] {
    return useSelector((state) => state.chatHistory.chatHistory)
}
