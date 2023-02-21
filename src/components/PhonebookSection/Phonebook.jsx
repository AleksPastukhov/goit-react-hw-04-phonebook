import PropTypes from 'prop-types';
import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { Section, Title, Subtitle, Container } from './PhonebookSection.styled';

function PhonebookSection({
  mainTitle,
  title,
  filter,
  contactsSet,
  onSubmit,
  onChange,
  onDeleteContact,
}) {
  return (
    <>
      <Title>{mainTitle}</Title>
      <Section>
        <ContactForm onSubmit={onSubmit} />
        <Container>
          <Subtitle>{title}</Subtitle>
          <Filter filter={filter} onChange={onChange} />
          <ContactsList
            contactsSet={contactsSet}
            filter={filter}
            onDeleteContact={onDeleteContact}
          />
        </Container>
      </Section>
    </>
  );
}

PhonebookSection.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  contactsSet: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default PhonebookSection;
