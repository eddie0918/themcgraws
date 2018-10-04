import React, { Component } from 'react';
import { get } from '../../Code/IApi';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default class CharityChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      charityList: [],
      selectedCharities: props.selectedCharities
        ? (Array.isArray(props.selectedCharities)
          ? props.selectedCharities
          : [props.selectedCharities])
        : []
    };
  }

  handleChange = (newValue) => {
    console.log('---', newValue)
    this.setState({ selectedValue: newValue });
    this.props.onChange(newValue);
  }

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
      categoriesResponse = await get('charity/cats/list');
    this.setState({
      charityList: charitiesResponse.List,
      categoryList: categoriesResponse.List,
    });
  }
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
        options={this.state.charityList.map(c => { return { value: [c.CharityId, c.CategoryName, c.Locations].join(' '), label: c.CharityName }; })}
        onChange={e => this.handleChange(e)}
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
