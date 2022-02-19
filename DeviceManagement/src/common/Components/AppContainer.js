import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import DropdownAlert from 'react-native-dropdownalert';
import { useSelector } from 'react-redux';
import { quoteOfTheDaySelector, showToastSelector } from '../../API/selector';
import { useDispatch } from 'react-redux';
import { UPDATE_APP_DATA } from '../../API/actions';

const AppContainer = () => {

    const showToast = useSelector(showToastSelector())
    const message = useSelector(quoteOfTheDaySelector())

    const dispatch = useDispatch();
    const style = AppContainerStyle()

    return  <View>
        <Text />
       {showToast &&  <DropdownAlert
            onClose={() => {
                dispatch({type: UPDATE_APP_DATA, data: {showToast: false}});
            }}
            closeInterval={3000}
            ref={(ref) => {
                if (ref) {
                    ref.alertWithType('custom', '', message?.q || "");
                }
            }}
            updateStatusBar={false}
            containerStyle={style.container}
            messageStyle={style.textStyle}
            useNativeDriver
            />}
  </View>
}

AppContainer.propTypes = {
    
  };

const AppContainerStyle = (theme) => ({
    container:{
        backgroundColor: "red",
    },
    textStyle: {
        color: "white"
    }
})

export default AppContainer