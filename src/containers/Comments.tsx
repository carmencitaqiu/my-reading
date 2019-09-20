import React from 'react'
import { connect } from 'react-redux'
import { changeLike } from '../actions/index'
import { CommentItem} from '../types/index'

const cardStyle = {
    marginTop: '30px',
    border:'1px solid #ebebeb',
    boxShadow: '0 1px 3px rgba(26,26,26,.1)',
    borderRadius:'4px'
};

const cardWrpperStyle = {
    overflow:'hidden',
    margin: '10px'
};

const listStyle = {
    overflow:'hidden',
    padding:'20px 0',
    margin:'0 20px',
    borderBottom: '1px solid #eee'
};

const authStyle = {
    fontSize: '20px',
    height: '24px',
    margin: '0',
    lineHeight:'24px'
};

const dateStyle = {
    lineHeight: '24px',
    color:'#999',
    fontSize: '14px'
};
const commentStyle = {
    textIndent: '3rem',
    padding:'0 10px'
};

const spanStyle = {
    lineHeight:'24px',
    cursor:'pointer',
}



interface ICommentsList {
    commentlist: CommentItem[],
    updatedComments:CommentItem[],
    switchLike :(commonObj:any) => any
}


export class Comment extends React.PureComponent<ICommentsList>{
    state = {
        scommentlist: this.props.commentlist
    };
    handlechangeLike(index: number) {
        this.props.switchLike({
            commentlist:this.state.scommentlist,
            index:index
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps:ICommentsList) {
        this.setState({
            scommentlist:nextProps.updatedComments
        })
    }

    render() {
        return (
            <div style={cardStyle}>
                <ul>
                {
                    this.state.scommentlist ? 
                    this.state.scommentlist.map((comment,index)=> {
                        return (
                            <li key={index} style={listStyle}>
                                <div style={cardWrpperStyle}>
                                    <h4 style={authStyle} className="f_l">{comment.author}</h4>
                                    <span style={dateStyle} className="f_r">{comment.createDate}</span>
                                </div>
                                <p style={commentStyle}>{comment.content}</p>
                                <span style={spanStyle} className="f_r" onClick={()=>this.handlechangeLike(index)}>
                                    <i style={{fontSize: '24px',color:(comment.isLike ? "#ec7259" :"#969696")}} className="icon iconfont">&#xe60c;</i>
                                    <span>{comment.likeNum}已赞</span>
                                </span>
                            </li> 
                        );
                    }):
                    this.props.commentlist.map((comment,index) => {
                        return (
                            <li key={index} style={listStyle}>
                                <div style={cardWrpperStyle}>
                                    <h4 style={authStyle} className="f_l">{comment.author}</h4>
                                    <span style={dateStyle} className="f_r">{comment.createDate}</span>
                                </div>
                                <p style={commentStyle}>{comment.content}</p>
                                <a style={spanStyle} className="f_r" onClick={()=>this.handlechangeLike(index)}>
                                    <i style={{fontSize: '24px',color:(comment.isLike ? "#ec7259" :"#969696")}} className="icon iconfont">&#xe60c;</i>
                                    <span>{comment.likeNum}已赞</span>
                                </a>
                            </li> 
                        );
                    })
                }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    updatedComments:state.updatedComments
})
const mapDispatchToProps =  {
    switchLike:changeLike
}
export default connect(mapStateToProps,mapDispatchToProps)(Comment)