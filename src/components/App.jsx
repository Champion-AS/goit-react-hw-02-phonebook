import {Phonebook} from './Phonebook/Phonebook'
import { Component } from 'react';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  
  
  onChangeName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  
  }
 handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, number: this.state.number, id: nanoid() },
        ],
      };
    });
  };



  render() {
    return (
      <div>
      
        <Phonebook
          handleAddContact={this.handleSubmit}
          onChangeName={this.onChangeName}
          contacts={this.state.contacts}
        />

      </div>
    );
  }
}


