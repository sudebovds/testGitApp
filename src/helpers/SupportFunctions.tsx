export const ReadmeDecodeUnicode = (str: string) => {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

export const tryLoading = (loading: boolean, error: string | null) => {
    if(loading){
      return <div>It is loading</div>
    }
    if(error){
      return <div>It is error {error}</div>
    }
    else{
      return null
    }
  }