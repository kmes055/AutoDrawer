import React, { Component } from 'react';
import { ProgressBarAndroid, StyleSheet, View, Text, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';

// export const progressProps = {
//     styleAttr: 'Horizontal',
//     indeterminate: false,
// }

class progress extends Component {
    constructor(props) {
        super(props);
    }
    StartProgress = () => {
        const { navigation } = this.props;
        this.value = setInterval(() => {
            if (this.props.progress <= 1) {
                prog = this.receiveFromServer('progress')
                this.props.setProgress(prog)
            }
        }, 100);
        this.complete = setInterval(() => {
            if(this.props.progress >= 1){
                res = this.receiveFromServer('result')
                
                navigation.navigate('Transpose')
            }
        },50);
    }
    stopProgress = () => {
        clearInterval(this.value);
    }
    clearProgress = () => {
        this.props.setProgress(0.0)
    }
    moveResult = () => {
        if(this.props.progress == 100){
            navigation.navigate('Transpose')
        }
    }
    receiveFromServer = (mode) => {
        baseUrl = 'http://172.16.20.133:8000/stream/'
        options = {
            headers: {
                token: this.props.token,
                mode: mode,
                category: this.props.category,
                progress: this.props.progress,
              },
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

const mapStateToProps = (state) => ({
    progress    : state.duck.progress,
    token       : state.duck.token,
    category    : state.duck.category,
})

const mapDispatchToProps = (dispatch) => ({
    setProgress : (data) => dispatch(actions.setProgress(data)),
    setResult   : (data) => dispatch(actions.setResult(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(progress);