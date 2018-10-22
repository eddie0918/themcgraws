import React from 'react';
import { Link } from 'react-router-dom';
import PhysicalTab from './PhysicalComponents/PhysicalTab';
import MainPage from '../MainTemplate/MainPage'

export default function PhysicalCards(props) {
  return (
    <MainPage
      title='Physical Cards'
      description={<p>You can have cards shipped to you for in-person giving or shipped directly to the recipient. Want to order in bulk? Use our <Link to='/Purchase/CustomPhysicalCards'>Custom Physical Cards page</Link>.</p>}
    >
      <PhysicalTab />
    </MainPage>
  )
}

