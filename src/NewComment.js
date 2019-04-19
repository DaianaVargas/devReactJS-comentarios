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
            <div align="center">
                <textarea 
                    value={this.state.newComment.content} 
                    onChange={this.handleChange}
                    rows={6}
                    cols={55}></textarea>
                <br />
                <button onClick={this.sendComment}
                    style={{backgroundColor: 'Gray',
                        // border: 'none',
                        color: 'white',//DodgerBlue
                        padding: 15,
                        textAlign: 'center',
                        fontSize: 16,
                        cursor: 'pointer',
                        width: 200,
                        marginBottom:10}}>Enviar</button>
            </div>
        )
    }
}

export default NewComment