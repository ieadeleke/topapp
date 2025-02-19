import { bindActionCreators } from "@reduxjs/toolkit";
import storeFactory from "../../store";
import { ADD_CHAT_HISTORY, REMOVE_CHAT_HISTORY } from "@/redux/actions/chat.action";

export const chatHistoryActions = bindActionCreators({
    addChatHistory: (payload: any) => ({ type: ADD_CHAT_HISTORY, payload }),
    removeChatHistory: (threadId: string) => ({ type: REMOVE_CHAT_HISTORY, payload: threadId })
}, storeFactory().store.dispatch)