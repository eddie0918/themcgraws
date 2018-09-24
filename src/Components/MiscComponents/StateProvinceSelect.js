import React from 'react';
import PropTypes from 'prop-types';
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
  { value: 'GA', label: 'Georgia' },
  { value: 'GU', label: 'Guam' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MB', label: 'Manitoba' },
  { value: 'MH', label: 'Marshall Islands' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'FM', label: 'Micronesia' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'UM', label: 'Minor Outlying Islands' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NB', label: 'New Brunswick' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NL', label: 'Newfoundland and Labrador' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'MP', label: 'Northern Mariana Islands' },
  { value: 'NT', label: 'Northwest Territories' },
  { value: 'NS', label: 'Nova Scotia' },
  { value: 'NU', label: 'Nunavut' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'ON', label: 'Ontario' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PW', label: 'Palau' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'PE', label: 'Prince Edward Island' },
  { value: 'PR', label: 'Puerto Rico' },
  { value: 'QC', label: 'Quebec' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SK', label: 'Saskatchewan' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VI', label: 'Virgin Islands' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
  { value: 'YT', label: 'Yukon' }
];

export default class StateProvinceSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: props.selectedValue
    };
  }
  handleChange = (newValue) => {
    this.setState({ selectedValue: newValue.value });
    this.props.onChange(newValue.value);
  }
  render() {
    const selectedOption = options.find(o => o.value === this.state.selectedValue) || null;

    return (
      <Select
        name="personalInformationState"
        id="personalInformationState"
        className="form-group has-float-label"
        classNamePrefix="react-select"
        placeholder="State/Province"
        value={selectedOption}
        onChange={e => this.handleChange(e.value)}
        options={options}
      />
    );
  }
}

StateProvinceSelect.propTypes = {
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
};