import React, { Component } from 'react'

class Comment extends Component {
    render(){
        return (
            <div>
                {/* <div>{JSON.stringify(this.props)}</div>  */}
                
                <div>{this.props.comment.content}</div>
                <div>{this.props.comment.date.toLocaleString()}</div>
            </div>
        )
    }
}

export default Comment