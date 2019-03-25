import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment'

class App extends Component {
  state = {
    comments: [
      { content: "comentário 1", date: new Date() },
      { content: "comentário 2", date: new Date() },
      { content: "comentário 3", date: new Date() },
    ]
  }

  sendComment = (newComment) => {
    this.setState({
      comments: [...this.state.comments, newComment],
    })
  }

  render() {
    return (
      <div className="App">
        <NewComment sendComment={this.sendComment} />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
