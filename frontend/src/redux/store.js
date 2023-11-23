import {configureStore} from '@reduxjs/toolkit'
import menuReducer from './slice'

export const store= configureStore({
    reducer: menuReducer
})