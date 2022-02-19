import React, { useState } from 'react';
import {  DeviceEventEmitter, Image, Text, TouchableOpacity, View} from 'react-native';
import { BACK_ARROW, SWITCH_OFF, SWITCH_ON } from '../../common/Assets/Const';
import {useNavigation} from '@react-navigation/native';
import { compose } from 'recompose';
import { withTheme } from '../../Theme';


const Header = (props) => {
    const { isBackArrowNeeded = true} = props
    const style = HeaderStyle(props.theme)
    const navigation = useNavigation();

    const [isSwitchOn, setSwichOn] = useState(false);

    return <View style={style.container}>
       {isBackArrowNeeded && <TouchableOpacity onPress={navigation.goBack}>
            <Image source={BACK_ARROW}/>
        </TouchableOpacity>}
        <Text style={style.textStyle}>Header</Text>
        <TouchableOpacity onPress={() =>{
            setSwichOn(!isSwitchOn)
            DeviceEventEmitter.emit('onThemeChanged', {isDarkTheme: !isSwitchOn});
        }}>
            <Image source={isSwitchOn ? SWITCH_ON : SWITCH_OFF}/>
        </TouchableOpacity>
    </View>
}


Header.propTypes = {
   
  };
const HeaderStyle = (theme) => ({
    container:{
        flexDirection: "row", 
        height: 54, 
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.view.background,
        paddingHorizontal: 10
    },
    textStyle: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        color: theme.colors.text.title
    }
})

export default compose(withTheme)(Header);