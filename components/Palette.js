import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import { ColorPicker, fromHsv } from 'react-native-color-picker';
import { connect } from 'react-redux';

import * as actions from '../modules/ducks';
import styles from '../styles';

class palette extends Component {
    constructor(props) {
        super(props);
    }
<<<<<<< HEAD
    componentDidMount(){
        console.log("컴포넌트 마운트됨");
    }
    onColorSelected = (navigation) => {
        this.props.setOldColor(fromHsv(this.props.color));
        this.props.setPattern(fromHsv(this.props.color));
        navigation.navigate("Pattern");
    }
    onOldColorSelected = (navigation) => {
        this.props.setPattern(this.props.oldColor);
        navigation.navigate("Pattern");
    }
=======
>>>>>>> c4cf17cac7a91c6871369632f1b58943b0844bc6
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, padding: 15, backgroundColor: '#212021' }}>
                <View style = {{flex :2 }}></View>
                <View style = {{flex : 7}}>
                <ColorPicker  
                    color={ this.props.color }
                    oldColor={ this.props.oldColor }
                    onColorChange={ this.props.setColor }
                    onColorSelected={() => {
                        this.props.setOldColor(fromHsv(this.props.color));
                        this.props.setPattern(fromHsv(this.props.color));
                        this.props.setCheckPalette(true);
                        navigation.navigate("Pattern");
                    }}
                    onOldColorSelected= {() => {
                        this.props.setPattern(this.props.oldColor);
                        this.props.setPattern(fromHsv(this.props.color));
                        this.props.setCheckPalette(true);
                        navigation.navigate("Pattern");
                    }}
                    style={styles.colorPicker}
                />
                </View>
                <View style = {{flex:1}}></View>
                <View style = {{flex: 1, flexDirection: 'row' }}>
                    <View style = {{flex: 1}}></View>
                    <View style = {{flex: 1}}>
                <Button title = "확인" color='#a55eea' onPress={() => {
                        this.props.setOldColor(fromHsv(this.props.color));
                        this.props.setPattern(fromHsv(this.props.color));
                        this.props.setCheckPalette(true);
                        navigation.navigate("Pattern");
                    }}/>
                    </View>
                    <View style = {{flex: 1}}></View>
                    </View>               
                    <View style = {{flex : 2}}></View>
            </View>
        );
    }
}

palette.navigationOptions = {
    header: null
}

const mapStateToProps = (state) => ({
    oldColor    : state.duck.oldColor,
    color       : state.duck.color,
    checkPalette: state.duck.checkPalette,
})

const mapDispatchToProps = (dispatch) => ({
    setPattern  : (data) => dispatch(actions.setPattern(data)),
    setOldColor : (data) => dispatch(actions.setOldColor(data)),
    setColor    : (data) => dispatch(actions.setColor(data)),
    setCheckPalette: (data) => dispatch(actions.setCheckPalette(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(palette);