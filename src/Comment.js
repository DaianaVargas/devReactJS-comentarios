import React from 'react'
// pure-functions
const Comment = ({comment}) => {
    return (
        <div>
            {/* <div>{JSON.stringify(this.props.comment)}</div>  */}
            
            <div>Comentário: {comment.content}</div>
            <div>Criação: {comment.date}</div>
            <br/>
        </div>
    )
}

export default Comment