import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import GlobalStyle from '../GlobalStyle';
import PhonebookSection from '../PhonebookSection';
import { Wrapper } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const createContact = (newName, newNumber) => {
    return {
      id: nanoid(4),
      name: newName,
      number: newNumber,
    };
  };

  const formSubmitHendler = (newName, newNumber) => {
    for (let contact of contacts) {
      if (contact.number === newNumber) {
        toast.error(
          `
Oops!!! this phone number ${newNumber} is already saved in your contact list under the name "${contact.name}".`
        );
        return;
      }
    }
    setContacts(prevState => [...prevState, createContact(newName, newNumber)]);
  };

  return (
    <Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <PhonebookSection
        mainTitle="Phonebook"
        title="Contacts"
        contactsSet={contacts}
        onSubmit={formSubmitHendler}
        onChange={setFilter}
        filter={filter}
        onDeleteContact={deleteContact}
      />
      <GlobalStyle />
    </Wrapper>
  );
}
