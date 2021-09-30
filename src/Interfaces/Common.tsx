export interface GetReposResponseType{
    url?: string
    query?: number,
    page?: number,
    per_page?: number,
    dataFunction: (data: any) => any;
}