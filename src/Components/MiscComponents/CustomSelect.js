import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Label } from 'reactstrap';

export default class CustomSelect extends React.Component {
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
    const { name, placeholder, options } = this.props
    const selectedOption = options.find(o => o.value === this.state.selectedValue) || null;

    return (
      <Fragment>
        <Select
          name={name}
          id={name}
          className="form-group has-float-label"
          classNamePrefix="react-select"
          placeholder={placeholder}
          value={selectedOption}
          onChange={e => this.handleChange(e.value)}
          options={options}
          styles={{ zIndex: 4 }}
        />
        <Label for={name} className="float-label-select">{placeholder}</Label>
      </Fragment>
    );
  }
}

CustomSelect.propTypes = {
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
};