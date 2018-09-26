import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const options = [
  { value: 'Email', label: 'Email' },
  { value: 'Message', label: 'Text Message' },
  { value: 'Share', label: 'Share via messaging' }
];

export default class DeliveryMethodSelect extends React.Component {
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
        name="deliveryMethodSelect"
        id="deliveryMethodSelect"
        className="form-group has-float-label"
        classNamePrefix="react-select"
        placeholder="Choose method of delivery"
        value={selectedOption}
        onChange={e => this.handleChange(e.value)}
        options={options}
      />
    );
  }
}

DeliveryMethodSelect.propTypes = {
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
};