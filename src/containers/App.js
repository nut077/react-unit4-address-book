import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import {Form, Contacts} from "../components";

class App extends Component {
  state = {
    notes: [
      'Note#1',
      'Note#2',
      'Note#3'
    ],
    message: 'Hello message',
    contacts: [{
      name: 'Somchai Haha', address: '123/456'
    }]
  };

  addNote = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      this.setState({notes: [...this.state.notes, event.target.value]},
        () => {
          const note = this.state.notes;
          console.log(note[note.length - 1]);
        }
      );
      event.target.value = '';
    }
  };

  componentDidMount() {
    this.noteInput.focus();
  }

  setMessage = (e) => {
    this.setState({message: e.target.value});
  };

  createContact = (contact) => {
    this.setState({contacts: [...this.state.contacts, contact]})
  };

  render() {
    return (
      <div className="container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {
            this.state.notes.map(
              (note, index) => <li key={index}>{note}</li>
            )
          }
        </ul>
        <input type="text" onKeyUp={this.addNote} ref={input => this.noteInput = input}/>
        <p>{this.state.message}</p>
        <input type="text" onChange={this.setMessage}/>
        <br/>
        <br/>
        <Form onSubmit={this.createContact}/>
        <hr/>
        <Contacts {...this.state}/>
      </div>
    );
  }
}

export default App;
