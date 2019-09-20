import * as types from '../constants/actionTypes';
export const getNews = ()=>(
    {
        type: 'GET_NEWS'
    }
)

export const getArticleDetail = (id:string)=>(
    {
        type: 'GET_DETAIL',
        id
    }
)

export const newComment = (comment:any) => (
    {
        type:types.ADD_COMMENT,
        comment
    }
)

export const changeLike = (commonObj:any) => (
    {
        type:'CHANGE_LIKE',
        commonObj
    }
)

