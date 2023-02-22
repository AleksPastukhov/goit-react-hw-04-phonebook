import PropTypes from 'prop-types';
import { Div, Input, Span } from './Filter.styled';

export default function Filter({ filter, onChange }) {
  const handleInput = e => {
    onChange(e.currentTarget.value);
  };

  return (
    <Div>
      <label>
        <Span>Find contacts by name</Span>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleInput}
        />
      </label>
    </Div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
