
import { Dimensions, StyleSheet } from 'react-native';
import { colors } from './palette';


const SignCss = StyleSheet.create({

    whole: {
        backgroundColor: "white",
    },
    parent: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: 'column',
    },
    imgView: {
        alignItems: "center"
    },
    img: {
        width: 370,
        height: 350,

    },
    txt: {
        color: "black",
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 8
    },
    head: {
        fontSize: 20,
        color: "black",
        paddingLeft: 20,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 20,
        marginBottom: 0,
        padding: 10,
        backgroundColor: "white"
    },
    butLog: {
        margin: 20
    },
    buttonText: {
        color: 'black',
    },
    err : {
        color: colors.red600,
        margin: 20,
        marginBottom:0
    }
})

export default SignCss;
