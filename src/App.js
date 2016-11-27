import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {translation: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isConsonant(letter){
    return ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"].indexOf(letter.toLowerCase()) !== -1
  }

  handleSubmit(event){
    let text = this.refs.swedish.value;
    this.translateToSwedish(text);
    event.preventDefault();
  }

  translateToRobbers(text){
    let translatedString = "";

    for (let i = 0; i < text.length; i++){
      if (this.isConsonant(text.charAt(i))){
        translatedString += text.charAt(i) + "o" + text.charAt(i);
      } else {
        translatedString += text.charAt(i);
      }
      this.setState({
        translation: translatedString
      });
    }
  }

  translateToSwedish(text){
    let translatedString = "";

    for (let i = 0; i < text.length; i++){
      if (this.isConsonant(text.charAt(i))){
        translatedString += text.charAt(i);
        i += 2;
      } else {
        translatedString += text.charAt(i);
      }
      this.setState({
        translation: translatedString
      });
    }

  }

  render() {
    return (
      <div className="container">
        <div>
          <h2>Rövarspråket!</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="swedish" placeholder="Svenska"></input>
            <button type="submit" className="btn btn-default">Översätt</button>
            <input type="text" className="form-control" ref="robbers" value={this.state.translation} placeholder="Rövarspråk"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
