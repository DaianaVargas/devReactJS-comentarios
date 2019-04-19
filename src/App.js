import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment'
//import { database } from './firebase'

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
    const { database } = this.props
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
    if (!newComment.content) {
      return
    }
    const { database } = this.props
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
      <div className="App" style={{
        margin: 'auto',
        width: '50%',
      }}>
          <p style={{
            fontFamily:'verdana', 
            fontSize:18,
            fontWeight:'bold',
            textAlign:'center',
          }}>Insira o seu comentário: </p>
        <NewComment sendComment={this.sendComment} />
        <Comments comments={this.state.comments} />
        {
          this.state.isLoading && 
          <p style={{
            fontFamily:'verdana', 
            fontSize:18,
            fontWeight:'bold',
            textAlign:'center',
          }}>Carregando ... </p>
        }
      </div>
    );
  }
}

export default App;
