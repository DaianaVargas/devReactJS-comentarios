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

    const dataFormat = c.date ? (new Date(c.date)).toLocaleDateString() : ''

    return (
        <div align="center" style={{ maxWidth:400,
            margin: 'auto',
            width: '100%',}}>
            {/* <div>{JSON.stringify(this.props.comment)}</div>  */}
            
            <div style={{
                backgroundColor:'LightGray', padding:10
            }}>
                <div style={{fontFamily:'verdana', fontSize:14}}>Comentário: {c.content}</div>
                <div style={{fontFamily:'verdana', fontSize:12}}>Criação: {dataFormat}</div>
            </div>            
            <br/>
        </div>
    )
}

export default Comment