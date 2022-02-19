import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withTheme } from '../../Theme';

const InputText = (props) => {
    const style = InputTextStyle(props.theme)
    const {onChangeText, title, inputValue, editable} = props;
    const [value, setValue] = useState(inputValue)

    useEffect(() => {
        setValue(inputValue)
    },[inputValue])

    return <View style={style.container}>
                <Text style={style.textStyle}>{title} :</Text>
                <TextInput 
                    editable={editable}
                    style={style.inputStyle}
                    onChangeText={(text) => {
                        setValue(text)
                        onChangeText(text)
                    }}
                    value={value}
                    placeholder="Enter Value"
                />
            </View>
}

InputText.propTypes = {
    onChangeText: PropTypes.func, 
    title: PropTypes.string
  };
const InputTextStyle = (theme) => ({
    container:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    inputStyle:{
        flex:1,
        borderWidth: 1,
        borderColor: "gray",
        color: theme.colors.text.title,
        borderRadius: 6,
        height: 40,
        paddingLeft: 10
    },
    textStyle: {
        flex:1,
        color: theme.colors.text.title,
        fontWeight: "bold",
        fontSize: 16
    }
})

export default compose(withTheme)(InputText);