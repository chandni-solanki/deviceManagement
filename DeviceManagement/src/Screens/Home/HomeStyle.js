import { StyleSheet } from "react-native";


const HomeStyle = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.view.background
    },
    itemContainer:{
        paddingLeft: 20, 
        // justifyContent: "center"
    },
    buttonContainer:{
        flexDirection: "row",
        
        // justifyContent: "space-between"
    },
    titleStyle:{
        marginTop: 10,
        color: theme.colors.text.title
    }
})

export default HomeStyle