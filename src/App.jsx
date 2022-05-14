import { useGetContactsQuery } from "./redux/contactsSlice";
import ContactsList from "./components/ContactsList";
import Filter from './components/Filter'
import Form from './components/Form'
import { Toaster } from 'react-hot-toast'
import {Container, MainTitle, Title, Message } from './App.styled'

function App() {
     const { data, error } = useGetContactsQuery();

  const showContactsSection = contacts => (
    <>
      {contacts.length === 0 ? (
        <Message>Your phonebook is empty, add your first contact!</Message>
      ) : (
        <>
          <Title>Contacts</Title>
          {contacts.length > 1 ? <Filter /> : null}
          <ContactsList contacts={contacts} />
        </>
      )}
    </>
    );
    
    return (
        <Container>
      <div>
        <Toaster />
      </div>
      <MainTitle>Phonebook</MainTitle>
      <Form />
      
      {data && showContactsSection(data)}
      {error && <div>Something went wrong...</div>}
    </Container>
    )
}

export default App;