import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
    render(){
        const keys = Object.keys(this.props.comments)
        return (
            <div>
                { keys.map( key => <Comment key={key} comment={this.props.comments[key]} /> )}
            </div>
        )
    }
}

export default Comments