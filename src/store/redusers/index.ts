import { dataReducer } from './dataReducer';
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    repos: dataReducer,
})

export type RootState = ReturnType<typeof rootReducer>