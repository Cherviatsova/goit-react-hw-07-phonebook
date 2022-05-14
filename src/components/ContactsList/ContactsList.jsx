import {ContactList } from './ContactsList.styled'
import React from 'react'
import { useSelector } from 'react-redux'
import Contact from '../Contact'
import { getFilter } from '../../redux/selectors'

function ContactsList({ contacts }) {
    const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
    );
    
    return (
        <ContactList>
      {filteredContacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, phone }) => (
          <Contact key={id} name={name} number={phone} id={id} />
        ))}
    </ContactList>
    )
}

export default ContactsList