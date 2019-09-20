import React from 'react'
import ArticleDetail from '../containers/ArticleDetail'



export default class Detail extends React.PureComponent<any> {
    render() {
       return (
            <ArticleDetail detailId={this.props.match.params.id}/>
       )
    }
}
