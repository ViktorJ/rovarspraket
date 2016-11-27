import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-cosmo.min.css';
import './App.css';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      swedish: "",
      robbers: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRobbers = this.handleRobbers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  isConsonant(letter){
    return ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"].indexOf(letter.toLowerCase()) !== -1
  }

  handleChange(event){
    this.setState({swedish: event.target.value});
  }

  handleRobbers(event){
    this.setState({robbers: event.target.value});
  }

  handleSubmit(event){
    let text = "";

    if (this.refs.swedish.value === ""){
      text = this.state.robbers;
      this.translateToSwedish(text);
    } else {
      text = this.state.swedish;
      this.translateToRobbers(text);
    }

    event.preventDefault();
  }

  handleButton(event){
    this.setState({
      swedish: "",
      robbers: ""
    });
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
        robbers: translatedString
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
        swedish: translatedString
      });
    }

  }

  render() {
    return (
      <div className="container">
        <div>
          <h2>Rövarspråket!</h2>
        </div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control left" ref="swedish" placeholder="Svenska" value={this.state.swedish} onChange={this.handleChange}></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default">Översätt</button>
          </div>
          <div className="form-group">
            <input type="text" className="form-control right" ref="robbers" placeholder="Rövarspråk" value={this.state.robbers} onChange={this.handleRobbers}></input>
          </div>
        </form>
        <button type="button" className="btn btn-primary form-group" onClick={this.handleButton}>Rensa</button>
      </div>
    );
  }
}

export default App;
