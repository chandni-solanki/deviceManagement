import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {compose} from 'recompose';
import PropTypes from 'prop-types';
import Home from './Screens/Home/Home';
import { withTheme } from './Theme';
import DeviceDetails from './Screens/Home/DeviceDetails';

const HomeStack = createNativeStackNavigator();

function RouterComponent(props) {
   
  return (
    <NavigationContainer>
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="DeviceDetails" component={DeviceDetails} />
        </HomeStack.Navigator>
    </NavigationContainer>
  );
}
RouterComponent.propTypes = {
  theme: PropTypes.object,
  
};
export default compose(withTheme)(RouterComponent);
