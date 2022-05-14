import React from "react";
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from "redux/contactsSlice";
import {ContactItem, ContactText } from './Contact.styled';
import Button from "../Button";
import toast from 'react-hot-toast';


function Contact({ id, name, number }) {
    const [deleteItem, { isLoading }] = useDeleteContactMutation();

    const deleteContact = () => {
      deleteItem(id);
      toast.success('Selected contact deleted');
    }
    return (
        <ContactItem>
            <ContactText>
                <b>{name}:</b> {number}
            </ContactText>
          <Button
        label={isLoading ? 'Deleting...' : 'Delete'}
        type="submit"
        onClick={deleteContact}
        disabled={isLoading}
      />  
        </ContactItem>
    )
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};


export default Contact;
