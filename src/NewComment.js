import React, { Component } from 'react'

class NewComment extends Component {  
    state = {
        newComment: { content: '', date: ''}
    }
    
    handleChange = event => {
        this.setState({
            newComment: { content: event.target.value, date: new Date() }
        })
    }

    sendComment = () => {
        this.props.sendComment(this.state.newComment)
        this.setState({
            newComment: { content: '', date: ''}
        })
    }

    render(){
        return(
            <div>
                <textarea value={this.state.newComment.content} onChange={this.handleChange}></textarea>
                <button onClick={this.sendComment}>Enviar</button>
            </div>
        )
    }
}

export default NewComment