import React, { Component } from 'react';
import { ProgressBarAndroid, StyleSheet, View, Text, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';

// export const progressProps = {
//     styleAttr: 'Horizontal',
//     indeterminate: false,
// }

export default class progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressStatus: 0.0
        }
    }
    StartProgress = () => {
        const { navigation } = this.props;
        this.value = setInterval(() => {
            if (this.state.progressStatus <= 1) {
                this.setState({ progressStatus: this.state.progressStatus + .01 })
            }
        }, 100);
        this.complete = setInterval(() => {
            if(this.state.progressStatus >= 1){
                navigation.navigate('Transpose')
            }
        },50);
    }
    stopProgress = () => {
        clearInterval(this.value);
    }
    clearProgress = () => {
        this.setState({ progressStatus: 0.0 })
    }
    movePage = () => {
        this.state.progressStatus 
    }
    moveResult = () => {
        if(this.state.progressStatus == 100){
            navigation.navigate('Transpose')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:2}}></View>
                <View style={{flex:5, flexDirection:'row'}}>
                    <View style ={{flex:1}}></View>
                    <View style ={{flex:5}}>
                    <Image source={require('../icons/gif2.gif')}
                    style={{
                        flex:1,
                        resizeMode: 'contain',
                        height:'100%',
                        width:'100%'}}/>
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <NavigationEvents onDidFocus={this.StartProgress} />
                <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{ fontSize: 20, }}>{parseFloat((this.state.progressStatus * 100).toFixed(3))} % 진행됨</Text>
                </View>
                <ProgressBarAndroid styleAttr="Horizontal" progress={this.state.progressStatus} indeterminate={false} />
                <View style={{flex: 3}}></View>
            </View>
        );
    }
}
progress.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 10,
        backgroundColor: '#CAC0E4',
    },
});