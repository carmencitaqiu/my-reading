import * as types from '../constants/actionTypes';
const reducer = (state:any = {}, action: any) => {
   switch (action.type) {
      case 'GET_NEWS':
         return { ...state, loading: true };
      case 'NEWS_RECEIVED':
         return { ...state, news: action.json, loading: false }
      case 'GET_DETAIL':
         return { ...state, loading: true};
      case 'ARTICLE_DETAIL_RECEIVED':
         return {...state, articleDetail:action.json, loading:false}
      case types.ADD_COMMENT:
         return {...state, articleDetail:action.json, loading:false}
      case 'CHANGE_LIKE':
         let commentlist = [...action.commonObj.commentlist];
         let comment = commentlist[action.commonObj.index];
         comment.isLike = !comment.isLike;
         if (comment.isLike) {
            comment.likeNum += 1;
         } else {
            comment.likeNum -= 1;
         }
         return Object.assign({},state,{
            updatedComments:commentlist
         })
      default:
         return state;
   }
};
export default reducer;