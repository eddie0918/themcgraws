import React from 'react';
import Select from 'react-select';


const options = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AB', label: 'Alberta' },
  { value: 'AS', label: 'American Samoa' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'AA', label: 'Armed Forces Americas' },
  { value: 'AE', label: 'Armed Forces Canada/Europe/Middle East/Africa' },
  { value: 'AP', label: 'Armed Forces Pacific' },
  { value: 'BC', label: 'British Columbia' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'DC', label: 'District of Columbia' },
  { value: 'FL', label: 'Florida' },
  { value: 'YT', label: 'Yukon' }
];

export default class SelectedCharityList extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        name="SelectedCharityList"
        id="SelectedCharityList"
        className="form-group has-float-label"
        classNamePrefix="react-select"
        placeholder="Selected Charities"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        menuIsOpen={true}
        isMulti={true}
      />
    );
  }
}

