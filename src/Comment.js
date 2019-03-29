import React, { Component } from 'react'

class Comment extends Component {
    render(){
        const { comment } = this.props
        return (
            <div>
                {/* <div>{JSON.stringify(this.props.comment)}</div>  */}
                
                <div>Comentário: {comment.content}</div>
                <div>Criação: {comment.date}</div>
                <br/>
            </div>
        )
    }
}

export default Comment