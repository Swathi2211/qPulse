
import { Dimensions, StyleSheet } from 'react-native';
import { colors } from './palette';


const LoginCss = StyleSheet.create({

    whole: {
        backgroundColor: "white",
    },
    parent: {
        paddingTop: 50,
        backgroundColor: "white",
        flex: 1,
        flexDirection: 'column',
    },
    imgView: {
        alignItems: "center",
        paddingTop: 40
    },
    img: {
        width: 250,
        height: 250,

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
        fontWeight: 'bold',
        
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 20,
        marginTop: 0,
        padding: 10,
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
        marginBottom:5
    }
})

export default LoginCss;
