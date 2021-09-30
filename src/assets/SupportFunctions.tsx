import axios from "axios";
import { FC, useEffect } from "react";
import { GetReposResponseType } from "../Interfaces/Common";

export const ReameDecodeUnicode = (str: string) => {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

export const FetchingData = ({...props}: GetReposResponseType) => {
        axios.request({
          url: props.url,
          method: 'get',
          baseURL: 'https://api.github.com',
          params: {
            q: props.query,
            per_page: props.per_page,
            page: props.page
          }
        })
          .catch(err => console.error(err))
          .then(response => props.dataFunction(response?.data));
      
}

FetchingData.defaultProps = {
    url: '',
    query: 20,
    page: 1,
    per_page: 30,
    dataFunction: () => null
}