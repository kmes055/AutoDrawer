import { StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { ColorPicker } from 'react-native-color-picker';

var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#CAC0E4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuRow: {
        flex: 3,
        flexDirection: 'row',
    },
    rowSpace1: {
        flex: 7,
    },
    rowLogo: {
        flex: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowBtn: {
        flex: 7,
        flexDirection: 'row',
    },
    rowSpace2: {
        flex: 1,
    },
    rowFileName: {
        flex: 2,
        flexDirection: 'row',
    },
    rowGoBtn: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rowSpace3: {
        flex: 12,
    },
    logo: {
        flex: 2,
        alignItems: "center",
        height: '150%',
        width: '150%',
    },
    icon1: {
        flex: 4,
        height: '85%',
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'center',
    },
    icon2: {
        flex: 4,
        height: '90%',
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'center',
    },
    btnText: {
        flex: 6,
        alignItems: 'center',
        color: '#FCF6E4',
        fontSize: 0.055*width,
    },
    fileName: {
        flex: 1,
        backgroundColor: "#FCF6E4",
        borderColor: "#448E9E",
        borderWidth: 2,
        color: "#448E9E",
    },
    goBtnText: {
        fontSize: 0.075*width,
        color:"#FCF6E4",
        alignItems:'center',
    },
    anotherGoodsBtn: {
        fontSize: 0.05*width,
        color:"#FCF6E4",
        alignItems:'center',
    },
    sketch: {
        flex: 3,
        alignItems: "center",
        height: '100%',
        width: '100%',
    },
    transposeText1: {
        flex: 3,
        fontSize: 0.07*width,
        color: "#448E9E",
    },
    completeMain: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: "contain",
    },
    menu: {
        flex: 1
    },
    menuIcon: {
        height: '100%',
        width: '100%',
    },
    colorPicker:{
        flex : 1,
    }
});