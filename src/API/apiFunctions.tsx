import React from 'react'
import axios from 'axios'

export const FetchingData = (searchQuery, setData) => {
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