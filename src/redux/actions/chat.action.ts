
import { createAction } from "@reduxjs/toolkit"

export const ADD_CHAT_HISTORY = "ADD_CHAT_HISTORY"
export const REMOVE_CHAT_HISTORY = "REMOVE_CHAT_HISTORY"

export const AddChatHistoryAction = createAction<any>(ADD_CHAT_HISTORY)
export const RemoveChatHistoryAction = createAction<string>(REMOVE_CHAT_HISTORY)