import {Phonebook} from './Phonebook/Phonebook'
import { Component } from 'react';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleDeleteUser = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };

  handleFilteerConnect = () => {
    return this.state.contacts.filter(elem => elem.name.toLowerCase().includes(this.state.filter.toLowerCase()));
}
  
  onChangeName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
   
  }
  handleSubmit = (name, number) => {
   if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
      this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name, number, id: nanoid() },
        ],
        name: '',
        number: '',
      };
    });
  };
 


  render() {
    return (
      <div>
      
        <Phonebook
          handleAddContact={this.handleSubmit}
          onChangeName={this.onChangeName}
          contactsFilter={this.handleFilteerConnect()}
          filter={this.state.filter}
          delete={this.handleDeleteUser}
        />

      </div>
    );
  }
}


