
import { Dimensions, StyleSheet } from 'react-native';
import { colors } from './palette';


const VideoCss = StyleSheet.create({

    head: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        margin: 10,
        marginBottom: 0
    },
    hit: {
        fontSize: 15,
        fontWeight: "bold",
        margin: 10,
        marginBottom: 0
    },
    desc: {
        margin: 10,
        marginBottom: 0
    },
    com: {
        margin: 10,
        padding: 10,
        backgroundColor: colors.gray300,
        borderRadius: 10,
        marginTop: 20,
    },
    txt: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    },
    fl: {

        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom:10
    },
    box: {
        backgroundColor: colors.gray200,
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 50,
        marginTop: 10,
        position: "relative"
    },

    btn: {
        position: "absolute",
        top: 25,
        right: 25,
    },
    scl : {
        overflowX : "scroll"
    },
    up : {
        marginTop:-300
    },
    btnUp:{
        marginTop:-310
    },


})

export default VideoCss;
