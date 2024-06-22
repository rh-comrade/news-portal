import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers/reducer";
import {logger} from 'redux-logger'

// store for managing all news data
export const appStore = configureStore({
    reducer:{appReducer},
    middleware: ():any=>{
        return [logger]
    }
})