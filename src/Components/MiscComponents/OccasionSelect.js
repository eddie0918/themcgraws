import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { OccasionsList } from '../MockData'

export default class OccasionSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: props.selectedValue
    };
  }
  handleChange = (newValue) => {
    this.setState({ selectedValue: newValue });
    this.props.onChange(newValue);
  }
  render() {
    const selectedOption = OccasionsList.find(o => o.value === this.state.selectedValue) || null;

    return (
      <Select
        name="occasionSelect"
        id="occasionSelect"
        className="form-group has-float-label"
        classNamePrefix="react-select"
        placeholder="Select an occasion for this card..."
        value={selectedOption}
        onChange={e => this.handleChange(e.value)}
        options={OccasionsList}
      />
    );
  }
}

OccasionSelect.propTypes = {
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
};