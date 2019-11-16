import React, { Component } from 'react';
import { ProgressBarAndroid, StyleSheet, View, Text } from 'react-native';
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
        this.value = setInterval(() => {
            if (this.state.progressStatus <= 1) {
                this.setState({ progressStatus: this.state.progressStatus + .01 })
            }
        }, 100);
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
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 3}}></View>
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