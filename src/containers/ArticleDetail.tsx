import React from 'react'
import { connect } from 'react-redux'
import {CommentItem} from '../types/index'
import Comment from './Comments';
import { getArticleDetail,newComment } from '../actions/index'
import {Container,Form,Button} from 'react-bootstrap';
import {DetailItem,User} from '../types/index'
interface IArticleDetail {
    detailId:string,
    articledetail:DetailItem,
    queryDetail: (detailId:string) => any,
    addComment: (comment:CommentItem) => any
}
const titleStyle = {
    margin:'30px 0'
}
const formStyle = {
    margin: '20px 0'
}

const buttonStyle = {
    margin:'10px 0'
}


export class ArticleDetail extends React.PureComponent<IArticleDetail> {

    inputCom:any;
    componentDidMount() {
        this.props.queryDetail(this.props.detailId);
    }

    UNSAFE_componentWillReceiveProps(nextProps:IArticleDetail) {
        console.log('--------' + nextProps);
    }

    handleAdd() {
        const me: User = {
            userId:'0001',
            userName:'me'
        };
        let newComment:CommentItem = {
            author:'me',
            createDate:'2019-10-19',
            content:this.inputCom.value,
            isLike:false,
            likeNum:0,
            user:me
        };
        this.props.addComment(newComment)
    }

    

    render() {
        
        return (
            this.props.articledetail ? 
            <Container>
                <div>
                    <h2 style={titleStyle}>{this.props.articledetail.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: this.props.articledetail.content}}></div>
                </div>
                <Comment commentlist={this.props.articledetail.commentlist}/>
                <Form.Group controlId="exampleForm.ControlTextarea1" style={formStyle}>
                    <Form.Label>我的评论</Form.Label>
                    <Form.Control as="textarea" rows="3"  ref={ta => (this.inputCom = ta)}/>
                    <Button className="f_r" style={buttonStyle} variant="primary" size="sm" active onClick={()=>this.handleAdd()}>添加</Button>
                </Form.Group>
            </Container>
            :null
        )
    }
}

const mapStateToProps = (state: any) => ({
    articledetail: state.articleDetail,
    isLike:state.isLike
})

const mapDispatchToProps =  {
    queryDetail: getArticleDetail,
    addComment:newComment
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleDetail)