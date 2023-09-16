"use client";

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import {persistReducer , persistStore} from "redux-persist"
import thunk from "redux-thunk"
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key : "root",
    storage
}

const reducers = {
    counterReducer : counterSlice
}
const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig , rootReducer);

export const store = configureStore(
    {
        reducer: persistedReducer,
        // reducer: reducers,
        middleware:[thunk]
    }
);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;