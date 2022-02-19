import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';

const HorizontalButtons = (props) => {
    const style = HorizontalButtonStyle()
    const {btns = [], customContainer, btnStyle, btnTextStyle, onItemClick} = props;
    return <View style={[style.buttonContainer, customContainer]}>
        {btns.map((item, index) => {
            return <Button key={index} title={item.title} onClick={() => {
                onItemClick ? onItemClick(item, index) : item?.onClick()}}
                btnStyle={btnStyle} textStyle={btnTextStyle}></Button>
            })}
        </View>
}

HorizontalButtons.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    customContainer: PropTypes.any,
    btnStyle: PropTypes.any,
    btnTextStyle: PropTypes.any,
    onItemClick: PropTypes.any
  };

 const HorizontalButtonStyle = (theme) => ({
    container:{
        padding: 5,
        marginTop: 10,
        backgroundColor: "red",
        height: 27
    },
    textStyle: {
        color: "white"
    },
    buttonContainer:{
        flexDirection: "row",
    },
})

export default HorizontalButtons