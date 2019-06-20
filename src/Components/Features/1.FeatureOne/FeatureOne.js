import React from 'react';
import '../Features.css';
import SideNav from './SideNav';
import FeatureMenu from '../FeatureMenu';

const FeatureOne = () => {
  const infoArray = [
    'This is an example of an off-canvas side navigation component.',
    'The parent component contains an array of links to output in the menu.',
    "The menu is toggled using a separate npm package called react-burgers, which is a react-specific version of Jonathan Suh's animated CSS hamburgers",
    'Also used here is a higher order component called onClickOutside, which provides a method called handleClickOutside to toggle the menu and burger when clicking outside the menu component'
  ];

  return (
    <div className='container-fluid featureContainer'>
      <FeatureMenu
        name={'Side Nav'}
        source={
          'https://github.com/eesa94/react-features/tree/master/src/Components/Features/1.FeatureOne'
        }
        info={infoArray}
      />
      <div className='row'>
        <div className='col-lg-10 offset-lg-1 text-center'>
          <SideNav />
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
