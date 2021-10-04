import { DataStateType, DataAction, DataActionTypes } from './../../Interfaces/stateTypes';

export const initialState: DataStateType = {
    data: {
        totalCount: 0,
        items: []
    },
    loading: false,
    error: null,
    page: 1,
    searchQuery: null
}

export const dataReducer = (state = initialState, action: DataAction): DataStateType => {
    switch(action.type){
        case DataActionTypes.FETCH_DATA:
            return {...initialState, loading: true, error: null, data: {}}
        case DataActionTypes.FETCH_DATA_SUCCESS:
            return {...initialState, loading: false, error: null, data: action.payload}
        case DataActionTypes.FETCH_DATA_ERROR:
            return {...initialState, loading: false, error: action.payload, data: {}} 
        case DataActionTypes.SET_SEARCH_QUERY:
            return {...initialState, loading: false, searchQuery: action.payload} 
        case DataActionTypes.CLEAR_DATA:
            return {...initialState, loading: false, data: {}}        
        default: return state              
    }
}