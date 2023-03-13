export interface IStoryModel {
    url:string,
    title:string,
    author:string,
}

export interface IStorySearchResponse {
    hits:IStoryModel[],
}