import { Dispatch } from 'redux'
import { DataActionTypes, DataAction, DataStateType } from './../../Interfaces/stateTypes'
import axios from 'axios'
import { initialState } from '../redusers/dataReducer'

export const setSearchQuery = (searchInput: string | undefined) => {
   return (dispatch: Dispatch<DataAction>) => {
        const query = searchInput?.trim();

        return dispatch({
            type: DataActionTypes.SET_SEARCH_QUERY,
            payload: query
        })
   }
}

export const ClearData = () => {
    return (dispatch: Dispatch<DataAction>) => {
        return dispatch({
            type: DataActionTypes.CLEAR_DATA,
            payload: initialState.data
        })
    }
}

export const fetchData = (searchQuery: string | undefined, page: number) => {
    return async (dispatch: Dispatch<DataAction>) => {
        try{
            dispatch({type: DataActionTypes.FETCH_DATA})

            const query = searchQuery?.trim();

            if(query){
                axios.request({
                    url: 'search/repositories',
                    method: 'get',
                    baseURL: 'https://api.github.com',
                    params: {
                    q: query,
                    per_page: 30,
                    page
                    }
                })
                    .catch(e => e)
                    .then(response => {
                        dispatch({
                            type: DataActionTypes.FETCH_DATA_SUCCESS,
                            payload: response.data
                        })
                })
            }
        }
        catch (e: any){
            dispatch({
                type: DataActionTypes.FETCH_DATA_ERROR, 
                payload: `There is data download error, ${e}`
            })
        }
    }
}