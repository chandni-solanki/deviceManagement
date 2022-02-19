import React, { useEffect, useState } from 'react';
import { FlatList, Text, View} from 'react-native';
import HomeStyle from './HomeStyle';
import {useNavigation} from '@react-navigation/native';
import HorizontalButtons from '../../common/Components/HorizontalButtons';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import container from '../../common/Container/AppContainer';
import Header from '../../common/Components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withTheme } from '../../Theme';

const Home = (props) => {
    const style = HomeStyle(props.theme)
    const [deviceList, setDeviceList] = useState(props.deviceListSelector);

    const navigation = useNavigation();

    useEffect(() => {
        console.log("props.deviceListSelector ",props.deviceListSelector)
        setDeviceList(props.deviceListSelector)
    },[props.deviceListSelector])

    const buttonArr = [{
        title: "Add",
    },
    {
        title: "Edit",
    },
    {
        title: "Remove"
    },
]

    function renderDeviceList(){
      return  <FlatList data={deviceList} 
        keyExtractor={(item,index) => index.toString()} 
        renderItem={({item}) => {
            return <View style={style.itemContainer}>
                    <Text style={style.titleStyle}>{item.name}</Text>
                    <HorizontalButtons btns={buttonArr} onItemClick={(data, index) => {

                        let isEdit = false
                        let itemToPass = item
                        switch (index) {
                            case 0:
                                isEdit = true
                                itemToPass = null
                                break;
                            case 1:
                                isEdit = true
                                itemToPass = item
                                break;
                            default:
                                isEdit = false
                                itemToPass = item
                                break;
                        }
                        navigation.navigate("DeviceDetails",{item: itemToPass, isEdit: isEdit})
                    }}/>
                </View>
        }} />

    }
    
    return <SafeAreaView style={style.container}>
        <Header isBackArrowNeeded={false}/>
        {renderDeviceList()}
    </SafeAreaView>
}

Home.propTypes = {
    theme: PropTypes.object,
    deviceListSelector: PropTypes.array
};

export default compose(container, withTheme)(Home);