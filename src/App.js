import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment'
import { database } from './firebase'

class App extends Component {
  state = {
    comments: {},
    isLoading: false
    // [
    //   { content: "comentário 1", date: new Date() },
    //   { content: "comentário 2", date: new Date() },
    //   { content: "comentário 3", date: new Date() },
    // ]
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({ 
        comments: snapshot.val(),
        isLoading: false
      })
    })
  }

  sendComment = (newComment) => {
    const id = database.ref().child('comments').push().key
    
    const comments = {}
    comments['comments/' + id] = {
      content: newComment.content,
      date: newComment.date
    }
    database.ref().update(comments)
    console.log(comments)

    // não precisa mais setar o estado pq o update obriga o on('value') a ser chamado depois
    // dentro do componentDidMount, fazendo com que o estado seja atualizado por lá
    // this.setState({
    //   comments: [...this.state.comments, newComment],
    // })
  }

  render() {
    return (
      <div className="App">
        <NewComment sendComment={this.sendComment} />
        <Comments comments={this.state.comments} />
        {
          this.state.isLoading && <p>Carregando ... </p>
        }
      </div>
    );
  }
}

export default App;
