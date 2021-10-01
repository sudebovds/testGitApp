import React, { Dispatch } from 'react'
import axios from 'axios'
import { ContextInterface } from '../Interfaces/Common';
import { ReadmeDecodeUnicode } from '../helpers/SupportFunctions';

export const FetchingData = (searchQuery: string | null, setData: Dispatch<ContextInterface>) => {
    const query = searchQuery?.trim();

    if(query){
        axios.request({
            url: 'search/repositories',
            method: 'get',
            baseURL: 'https://api.github.com',
            params: {
              q: query,
              per_page: 30,
              page: 1
            }
          })
            .catch(err => console.error(err))
            .then(response => {
              setData(response?.data);
        })
    }
}

export const FetchReadme = (owner: string | null, name: string | null, setReadme: Dispatch<any>) => {
    if(owner){
        axios.request({
            url: `/repos/${owner}/${name}/readme`,
            method: 'get',
            baseURL: 'https://api.github.com'
          })
            .catch(err => console.error(err))
            .then(response => {
              setReadme(ReadmeDecodeUnicode(response?.data?.content));
              console.log('readme worked')
            });
    }
}