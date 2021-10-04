import { ContextInterface } from './Common';

export interface DataStateType{
    data: ContextInterface;
    loading: boolean;
    error: null | string;
    page: number;
    searchQuery: string | undefined | null;
}

export enum DataActionTypes{
    FETCH_DATA = 'FETCH_DATA',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
    CLEAR_DATA = 'CLEAR_DATA',
    SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
}

export interface FetchDataAction{
    type: DataActionTypes.FETCH_DATA;
}

export interface FetchDataSuccessAction{
    type: DataActionTypes.FETCH_DATA_SUCCESS;
    payload: any;
}

export interface FetchDataErrorAction{
    type: DataActionTypes.FETCH_DATA_ERROR;
    payload: string;
}

export interface SetSearchQuery{
    type: DataActionTypes.SET_SEARCH_QUERY;
    payload: string | undefined;
}

export interface ClearData{
    type: DataActionTypes.CLEAR_DATA;
    payload: any;
}

export type DataAction = FetchDataAction | FetchDataSuccessAction | FetchDataErrorAction | SetSearchQuery | ClearData;