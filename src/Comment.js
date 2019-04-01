import React from 'react'
// pure-functions
const Comment = ({comment}) => {
    let c = {
        content: 'vazio',
        date: ''
    }

    if (comment && comment.content) {
        c = comment
    }

    return (
        <div>
            {/* <div>{JSON.stringify(this.props.comment)}</div>  */}
            
            <div>Comentário: {c.content}</div>
            <div>Criação: {c.date}</div>
            <br/>
        </div>
    )
}

export default Comment