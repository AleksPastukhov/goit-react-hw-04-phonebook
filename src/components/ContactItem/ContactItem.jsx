import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';

function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <>
      <span>{name}: </span>
      <span>{number}</span>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
