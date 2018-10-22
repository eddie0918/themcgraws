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
<<<<<<< HEAD
    this.setState({ selectedValue: newValue.value });
    this.props.onChange(newValue.value);
=======
    this.setState({ selectedValue: newValue });
    this.props.onChange(newValue);
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
  }
  render() {
    const { name, placeholder, description, options } = this.props
    const selectedOption = options.find(o => o.value === this.state.selectedValue) || null;

    return (
      <Fragment>
        <Select
          name={name}
          id={name}
          className={"form-group has-float-label" + (description ? " mb-0" : null)}
          classNamePrefix="react-select"
          placeholder={placeholder}
          value={selectedOption}
<<<<<<< HEAD
          onChange={this.handleChange}
=======
          onChange={e => this.handleChange(e)}
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
          options={options}
          styles={{ zIndex: 4 }}
        />
        <Label for={name} className="float-label-select">{placeholder}</Label>
        {description}
      </Fragment>
    );
  }
}

CustomSelect.propTypes = {
  // selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
};