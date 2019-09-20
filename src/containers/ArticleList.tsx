import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Comment from './Comments';
import { Link } from 'react-router-dom';
import { getNews } from '../actions/index'
import {ArticleItem} from '../types/index'

const articleStyle = {
    overflow: 'hidden',
	padding: '20px 0 10px 0',
    borderBottom: '1px solid #dcdcdc',
}
const titleStyle = {
    lineHeight: '28px',
    fontSize: '18px',
    color: '#333'
}

const descStyle:any = {
    wordBreak: "break-all",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: 'hidden'
}

interface IArticleList {
    articlelist: ArticleItem[],
    loadNews: () => any
}



export class ArticleList extends React.PureComponent<IArticleList> {
    componentDidMount() {
        this.props.loadNews();
    }
    render() {
        return (
            this.props.articlelist ? 
            <Fragment>
                {
                    this.props.articlelist.map((article, index) => {
                        return (
                            <article style={articleStyle} key={index}>
                                <div style={{overflow: 'hidden'}}>
                                    <h3 style={titleStyle}>{article.title}</h3>
                                    <p style={descStyle}>{article.description}</p>
                                    <Link className="f_r" to={'/detail/' + article.id}>全部内容></Link>
                                </div>
                                <Comment commentlist={article.commentlist}/>
                            </article>
                        );
                    })
                }
            </Fragment>
            : null
        );
    }
}

const mapStateToProps = (state: any) => ({
    articlelist:state.news,
})


const mapDispatchToProps = {
    loadNews: getNews
};

export default connect(mapStateToProps,mapDispatchToProps)(ArticleList)