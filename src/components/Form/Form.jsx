import { Container, ContactForm, Label, Input, ErrorText} from './Form.styled'
import toast from 'react-hot-toast'
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsSlice'
import Button from '../Button';
import { useForm } from 'react-hook-form'

function Form() {
 const [addItem] = useAddContactMutation();
    const { data: contacts } = useGetContactsQuery();
  
     const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
    
    const onSubmit = ({ name, phone }) => {
    contacts.some(contact => contact.name === name)
      ? toast.error(`${name} is already in contacts`)
      : addItem({ name, phone });
    reset();
    };
    
    return (
        <Container autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <ContactForm>
                <Label>
                    Name
                    <Input
                    type="text"
            {...register('name', {
              required: '❌ The field cannot be empty!',
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/gi,
                message:
                  "❌ Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
              },
            })}
                    />
                </Label>
                  <div>
          {errors?.name && (
            <ErrorText>
              {errors?.name.message || 'An error has occurred...'}
            </ErrorText>
          )}
        </div>
                

                <Label>
                    Phone number
                    <Input
                     type="tel"
            {...register('phone', {
              required: '❌ The field cannot be empty!',
              pattern: {
                value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g,
                message:
                  '❌ Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
              },
              minLength: {
                value: 5,
                message: '❌ Phone number must contain 5 digits minimum',
              },
            })}
                    />
                </Label>
                <div>
          {errors?.phone && (
            <ErrorText>
              {errors?.phone.message || 'An error has occurred...'}
            </ErrorText>
          )}
                </div>
                <Button label="Add contact" type="submit" disabled={!isValid} />
               
</ContactForm>
        </Container>
    )
}

export default Form;