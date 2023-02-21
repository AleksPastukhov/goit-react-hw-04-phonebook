import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Div, Input, Span } from './Filter.styled';

class Filter extends Component {
  handleInput = e => {
    this.props.onChange(e.currentTarget.value);
  };

  render() {
    return (
      <Div>
        <label>
          <Span>Find contacts by name</Span>
          <Input
            type="text"
            name="filter"
            value={this.props.filter}
            onChange={this.handleInput}
          />
        </label>
      </Div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
