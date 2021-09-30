import React, { useState, useEffect, FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { ReameDecodeUnicode } from '../assets/SupportFunctions';

interface DetailType{
    readme: {
        content: string;
    }
}


const Detail: FC<DetailType> = (readme) => {
    const [test, setTest] = useState(null);

    useEffect(() => {
    
        if(data !== null){
          axios.request({
            url: `/repos/${data.items[2].owner.login}/${data.items[2].name}/readme`,
            method: 'get',
            baseURL: 'https://api.github.com'
          })
            .catch(err => console.error(err))
            .then(response => {
              setReadme(response?.data);
              console.log('readme worked')
            });
        }
      }, [data]);

    useEffect(() => {
        if(readme !== null){
          setTest(ReameDecodeUnicode(readme.content));
        }
      }, [readme])
    }
    return (
        <div style = {{maxWidth: '1170px', display: 'flex', margin: 'auto', justifyContent: 'center', flexDirection: 'column'}}>
            {<ReactMarkdown children = {test} />}
        </div>
    )
}

export default Detail
