import React, { Component } from 'react';
import { throws } from 'assert';

class App extends Component {
  state = {
    newComment: { content: '', date: '' },
    comments: [
      { content: "comentário 1", date: new Date() },
      { content: "comentário 2", date: new Date() },
      { content: "comentário 3", date: new Date() },
    ]
  }

  sendComment = () => {
    this.setState({
      comments: [...this.state.comments, this.state.newComment],
      newComment: ''
    })
  }

  handleChange = event => {
    this.setState({
      newComment: { content: event.target.value, date: new Date() }
    })
  }

  render() {
    return (
      <div className="App">
        {/* NewComments */}
        <div>
          <textarea value={this.state.newComment.content} onChange={this.handleChange}></textarea>
          <button onClick={this.sendComment}>Enviar</button>
        </div>
        {/* Comments */}
        <div>
          {/* Comment */}
          { this.state.comments.map( comment => {
            return <div>
                    <div>{comment.content}</div>
                    <div>{comment.date.toLocaleString()}</div>
                  </div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
