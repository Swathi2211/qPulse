import { StyleSheet } from "react-native";
import { colors } from "./palette";

const BoxCss = StyleSheet.create({

    parent: {
        flex: 1,
        flexDirection: "column",
        margin: 50
    },
    btn: {
        margin: 20
    },
    img: {
        width: 200,
        height: 220
    },
    cont: {
        width: 200,
        height: 220,
    },
    h1:{
        fontWeight:"bold",
        color:"black",
        marginTop:10
    },
    p:{
        marginTop:10,
        marginBottom:10
    }

});

export default BoxCss;
