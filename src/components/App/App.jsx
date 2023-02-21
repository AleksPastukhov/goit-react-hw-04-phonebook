import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import GlobalStyle from '../GlobalStyle';
import PhonebookSection from '../PhonebookSection';
import { Wrapper } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChange = request => {
    this.setState({
      filter: request,
    });
  };

  createContact = (name, number) => {
    return {
      id: nanoid(4),
      name,
      number,
    };
  };

  formSubmitHendler = ({ name, number }) => {
    for (let contact of this.state.contacts) {
      if (
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.number === number
      ) {
        alert(`${name} is already in contacts`);
        return;
      }
      if (contact.number === number) {
        alert(`${number} is already in contacts`);
        return;
      }
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, this.createContact(name, number)],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Wrapper>
        <PhonebookSection
          mainTitle="Phonebook"
          title="Contacts"
          contactsSet={contacts}
          onSubmit={this.formSubmitHendler}
          onChange={this.handleChange}
          filter={filter}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Wrapper>
    );
  }
}

export default App;
