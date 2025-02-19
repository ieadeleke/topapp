import { AnyAction } from "@reduxjs/toolkit"
import { AddChatHistoryAction, RemoveChatHistoryAction } from "@/redux/actions/chat.action";

const initialState: {
    chatHistory: any[]
} = {
    chatHistory: []
};

export function chatHistoryReducer(state = initialState, action: AnyAction) {
    if (AddChatHistoryAction.match(action)) {
        const value = action.payload;
        if (state.chatHistory.find((item) => item.threadId == value.threadId)) {
            return state
        } return {...state, chatHistory: [value, ...state.chatHistory]}
    } else if (RemoveChatHistoryAction.match(action)) {
        const threadId = action.payload;
        return {...state, chatHistory: state.chatHistory.filter((item) => item.threadId != threadId)}
    } else return state
}