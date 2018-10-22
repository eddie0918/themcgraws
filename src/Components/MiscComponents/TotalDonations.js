
import { Component } from 'react';
import { get } from '../../Code/IApi';

export default class TotalDonations extends Component {
  constructor() {
    super();
    this.state = { total: '$2,402,969.00' };
  }

  async componentDidMount() {
    const response = await get('general/total-donated');
    this.setState({ total: response.Total });
  }

  render() {
    return this.state.total;
  }
}