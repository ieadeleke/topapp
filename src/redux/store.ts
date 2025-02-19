import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { chatHistoryReducer } from './reducers/chatHistory/chatHistory.reducer'

const persistConfig = {
    key: 'chatHistory',
    storage: storage,
}

const chatHistoryPersistedReducer = persistReducer(persistConfig, chatHistoryReducer)

const store = configureStore({
    reducer: combineReducers({
        chatHistory: chatHistoryPersistedReducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false // Required when using redux-persist
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default function storeFactory() {
    return { store, persistor }
}
