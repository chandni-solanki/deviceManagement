import { Text, TextInput, View } from "react-native"
import React, { useEffect, useState } from 'react';
import DeviceDetailsStyle from "./DeviceDetailsStyle";
import HorizontalButtons from "../../common/Components/HorizontalButtons";
import {useRoute} from '@react-navigation/native';
import { compose } from "recompose";
import container from "../../common/Container/AppContainer";
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../common/Components/Header";
import { withTheme } from "../../Theme";
import InputText from "../../common/Components/InputText";
import Button from "../../common/Components/Button";

const DeviceDetails = (props) => {
    const navigation = useNavigation();
    const route = useRoute();
    const style = DeviceDetailsStyle(props.theme)

    const [deviceData, setDeviceData] = useState({})
    const [isEdit, setEdit] = useState(route.params.isEdit)
    const [isModalInputEnable, setDeviceInputEnable] = useState(true)

    useEffect(() => {
        setDeviceData(route.params.item || {})
        setEdit(route.params.isEdit)
        setDeviceInputEnable(route.params.item ? false : true)
    },[route])

    useEffect(() => {
        props.getTodaysQuote()
    },[])

    const {model ="", os="",currentowner="",notes="", name=""} = deviceData;
    function renderInputView(){
        return  <View style={style.container}>
                    <InputText title={"Device"} inputValue={name} onChangeText={(text) => { setDeviceData({...deviceData, name: text})}}/>
                    <InputText title={"Model"} editable={isModalInputEnable} inputValue={model} onChangeText={(text) => { setDeviceData({...deviceData, model: text})}}/>
                    <InputText title={"OS"} inputValue={os} onChangeText={(text) => { setDeviceData({...deviceData, os: text})}}/>
                    <InputText title={"Currentowner"} inputValue={currentowner} onChangeText={(text) => { setDeviceData({...deviceData, currentowner: text})}}/>
                    <InputText title={"Notes"} inputValue={notes} onChangeText={(text) => { setDeviceData({...deviceData, notes: text})}}/>
                </View>
    }
    function renderDeviceDetails(){
        return <View style={style.container}>
                    <Text style={style.textHeader}>Device: <Text style={style.valueTxt}>{name}</Text></Text>
                    <Text style={style.textHeader}>Model: <Text style={style.valueTxt}>{model}</Text></Text>
                    <Text style={style.textHeader}>OS: <Text style={style.valueTxt}>{os}</Text></Text>
                    <Text style={style.textHeader}>Currentowner: <Text style={style.valueTxt}>{currentowner}</Text></Text>
                    <Text style={style.textHeader}>Notes: <Text style={style.valueTxt}>{notes}</Text></Text>
                </View>
    }
    console.log("deviceData ",deviceData)
     return <SafeAreaView style={style.mainContainer}>
                <Header />
                {isEdit ? renderInputView() : renderDeviceDetails() }
                <Button title={"Done"} textStyle={style.doneBtnText} btnStyle={style.doneBtnStyle}
                        onClick={() => {
                            if (isEdit) {
                                props.updateDeviceList(deviceData)
                            navigation.goBack()
                            } else{
                                // props.removeDevice(route.params.item)
                                props.updateAppData({showToast: true})
                                navigation.goBack()
                            }  
                        }}/>
            </SafeAreaView>
}

DeviceDetails.propTypes = {
    getTodaysQuote: PropTypes.func,
    removeDevice: PropTypes.func,
};
export default compose(container, withTheme)(DeviceDetails);