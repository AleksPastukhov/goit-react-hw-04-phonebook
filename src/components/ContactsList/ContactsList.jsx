import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { List, Item } from './ContactsList.styled';

function ContactsList({ filter, contactsSet = [], onDeleteContact }) {
  return (
    <>
      <List>
        {contactsSet
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, name, number }) => (
            <Item key={id}>
              <ContactItem
                id={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
              />
            </Item>
          ))}
      </List>
    </>
  );
}

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contactsSet: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
};

export default ContactsList;
