import { StyleSheet } from "react-native";
import { colors } from "./palette";

const JoinCss = StyleSheet.create({

    imgView: {
        justifyContent: "flex-start",
        alignItems: "flex-end",
    },
    img1: {
        justifyContent: "flex-start",
        alignItems: "flex-end",
        width: 150,
        height: 150,
        transform: [{ scaleX: -1 }, { rotate: '90deg' }],
        marginBottom:-30,
        marginTop:-5
    },
    wave: {
        width: 50,
        height: 50,
        margin:10
    },
    cent : {
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center"
    },
    parent: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: 'column',
    },
    Cont : {
        alignItems: "flex-start",
    },
    txt : {
        fontSize:30,
        fontWeight:'500',
        color: colors.gray900,
        marginLeft:20
    },
    inp : {
        borderWidth : 1,
        borderColor: colors.orange400,
        width: 150,
        margin:20,
        padding:10,
        flex:1,
        marginRight:0
    },
    merge:{
        flexDirection:"row",
        width:340
    },
    joinBtn : {
        height: 50,
        justifyContent:"center",
        marginTop:20
    },
    split:{
        alignItems:"center",
    }

});

export default JoinCss;
