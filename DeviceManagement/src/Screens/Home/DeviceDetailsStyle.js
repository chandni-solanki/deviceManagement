import { StyleSheet } from "react-native";

const DeviceDetailsStyle = (theme) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: theme.colors.view.background
    },
    container: {
        padding: 16
    },
    textHeader:{
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 15,
        color: theme.colors.text.title

    },
    marginTop:{
        marginTop: 0
    },
    valueTxt: {
        fontWeight: "300",
        fontSize: 16,
    },
    doneBtnStyle:{
        padding: 10,
        backgroundColor: "blue",
        marginTop: 20,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15
    },
    doneBtnText:{
        fontSize: 16,
        color: "white",
        fontWeight: "bold"
    }
})

export default DeviceDetailsStyle