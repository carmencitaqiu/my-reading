import React from 'react'
import { connect } from 'react-redux'
import {Spinner} from 'react-bootstrap';

interface ILoadingStateProps {
    loading: any
}

export class Loading extends React.PureComponent<ILoadingStateProps>{
    render() {
        return (
            this.props.loading ?
                <Spinner  animation="border" role="status">
                    <span style={{ textAlign: 'center' }} className="sr-only">Loading...</span>
                </Spinner> :
                null
        )
    }
}

const mapStateToProps = (state:any)=>({
    loading: state.loading
})

export default connect(mapStateToProps,null)(Loading)