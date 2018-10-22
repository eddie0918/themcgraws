import React, { Component } from 'react';
import { get } from '../../Code/IApi';
import PropTypes from 'prop-types';
import Select from 'react-select';
<<<<<<< HEAD
import makeAnimated from 'react-select/lib/animated';
=======
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5

export default class CharityChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      isCharitiesLoading: true,
      categoryList: [],
      charityList: [],
      selectedOptions: [],
=======
      categoryList: [],
      charityList: [],
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
      selectedCharities: props.selectedCharities
        ? (Array.isArray(props.selectedCharities)
          ? props.selectedCharities
          : [props.selectedCharities])
        : []
    };
<<<<<<< HEAD
    this.handleChange = this.handleChange.bind(this);
  }
=======
  }

  handleChange = (newValue) => {
    console.log('---', newValue)
    this.setState({ selectedValue: newValue });
    this.props.onChange(newValue);
  }

>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
  async componentDidMount() {
    let url = 'charity';
    if (this.props.search) {
      url += '/search/' + this.props.search;
    }
    else if (this.props.charities) {
      url += '/filter/' + this.props.charities.toString();
    }
    else {
      url += '/list/' + (this.props.list || 'all');
      if (this.props.categoryId) {
        url += '/' + this.props.categoryId.toString();
      }
    }
    const charitiesResponse = await get(url),
<<<<<<< HEAD
      categoriesResponse = await get('charity/cats/list'),
      selectedCharities = this.state.selectedCharities;
    this.setState({
      charityList: charitiesResponse.List,
      categoryList: categoriesResponse.List,
      isCharitiesLoading: false,
      selectedOptions: charitiesResponse.List
        .filter(c => selectedCharities.includes(c.CharityId))
        .map(c => ({ value: c.CharityId, label: c.CharityName }))
    });
  }
  handleChange(selectedOptions) {
    let selectedCharities = selectedOptions && selectedOptions.length
      ? selectedOptions.map(option => option.value)
      : [];
    if (selectedCharities.length > this.props.maxNumberOfCharities) {
      //Take charities added latest
      selectedCharities = selectedCharities.slice(-this.props.maxNumberOfCharities);
    }
    this.setState({ selectedCharities, selectedOptions });
    this.props.onChange(selectedCharities);
  }
=======
      categoriesResponse = await get('charity/cats/list');
    this.setState({
      charityList: charitiesResponse.List,
      categoryList: categoriesResponse.List,
    });
  }
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
  render() {
    return <div>
      <h1>Charity List</h1>
      <Select
        name="charity"
        id="charity"
        className="form-group has-float-label"
        classNamePrefix="react-select"
        placeholder={this.props.charityListPlaceholder}
        menuIsOpen="true"
        isMulti="true"
<<<<<<< HEAD
        loadingMessage={() => 'Loading Charities...'}
        components={makeAnimated()}
        isLoading={this.state.isCharitiesLoading}
        value={this.state.selectedOptions}
        options={this.state.charityList.map(c => ({ value: c.CharityId, label: c.CharityName }))}
        onChange={this.handleChange}
=======
        options={this.state.charityList.map(c => { return { value: [c.CharityId, c.CategoryName, c.Locations].join(' '), label: c.CharityName }; })}
        onChange={e => this.handleChange(e)}
>>>>>>> 3aeedcd62e8ef2f3b3ba1ede0fd866919fb4bef5
      />
      {this.props.allowSelectWholeCategory &&
        <div>
          <h1>Category List</h1>
          <Select
            name="category"
            id="category"
            className="form-group has-float-label"
            classNamePrefix="react-select"
            placeholder={this.props.categoryListPlaceholder}
            options={this.state.categoryList.map(c => { return { value: c.CategoryId, label: c.CategoryName }; })}
          />
        </div>
      }
    </div>;
  }
}

CharityChooser.propTypes = {
  allowSelectWholeCategory: PropTypes.bool,
  selectedCharities: PropTypes.arrayOf(PropTypes.object),
  search: PropTypes.string,
  charities: PropTypes.arrayOf(PropTypes.number),
  list: PropTypes.string,
  categoryId: PropTypes.number,
  charityListPlaceholder: PropTypes.string,
  categoryListPlaceholder: PropTypes.string,
  maxNumberOfCharities: PropTypes.number.isRequired
};
