import React from 'react'
import Loading from '../containers/Loading'
import ArticleList from '../containers/ArticleList'
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





let App = ()=> (
    <Container>
        <Loading/>
        <ArticleList />
    </Container>
)

export default App