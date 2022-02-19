import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Button = (props) => {
    const style = ButtonStyle()
    const {onClick, title, textStyle, btnStyle} = props;
    return <TouchableOpacity style={[style.container, btnStyle]} onPress={onClick}>
        <Text style={[style.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
}

Button.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    textStyle: PropTypes.any,
    btnStyle: PropTypes.any
  };
const ButtonStyle = (theme) => ({
    container:{
        padding: 5,
        marginTop: 10,
        backgroundColor: "red",
        // height: 27
    },
    textStyle: {
        color: "white"
    }
})

export default Button