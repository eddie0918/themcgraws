import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const options = [
  { value: 5, label: '$5.00' },
  { value: 10, label: '$10.00' },
  { value: 25, label: '$25.00' },
  { value: 50, label: '$50.00' },
  { value: 100, label: '$100.00' },
  { value: 500, label: '$500.00' }
];

export default class CardAmountSelect extends React.Component {
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
    const selectedOption = options.find(o => o.value === this.state.selectedValue) || null;

    return (
      <Select
        name="cardAmountSelect"
        id="cardAmountSelect"
        className="form-group has-float-label"
        classNamePrefix="react-select"
        placeholder="Select Amount"
        value={selectedOption}
        onChange={e => this.handleChange(e.value)}
        options={options}
      />
    );
  }
}

CardAmountSelect.propTypes = {
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
};