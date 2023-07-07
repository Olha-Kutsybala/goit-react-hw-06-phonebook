import PropTypes from 'prop-types';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactSlice';

const Form = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = (event, { name, number }) => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
      return;
    }

    dispatch(addContact(name, number));
    reset();
  };

  const reset = () => {
    return {
      name: '',
      number: '',
    };
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        minLength={2}
        value={contacts.name}
        placeholder="Enter here"
        className={css.input}
      />

      <label htmlFor="number" className={css.label}>
        Number
      </label>

      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={contacts.number}
        placeholder="111-11-11"
        className={css.input}
      />

      <button type="submit" className={css.form_button}>
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
export default Form;
