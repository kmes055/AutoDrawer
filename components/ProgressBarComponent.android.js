import React, { Component } from 'react';
import { ProgressBarAndroid, StyleSheet, View, Text, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import base64 from 'react-native-base64'

import * as actions from '../modules/ducks';
import { connect } from 'react-redux';

// export const progressProps = {
//     styleAttr: 'Horizontal',
//     indeterminate: false,
// }

/*
makeRemoteRequest = async () => {
 	const { page } = this.state;
   
   	try {
   			// 데이터 요청
   		const response = await fetch(url, {
   			method: 'GET'
   		});
   		// 받은 데이터 json 파싱
   		const res = await response.json();
   		// 데이터 배열의 길이 (jsonArray.length)
   		const resLength = res['list'].length;
   
   		this.setState({
   			// 현재 페이지가 1일 경우 기초 세팅, 1이 아닐경우 데이터 추가
   			data: page === 1 ? res.list : this.state.data.concat(res.list),
   
   			refreshing: false, // 새로고침 false
   			isLoading: false, // 데이터를 더 가져옴 ->  false,
   			// 길이가 20이 아닐경우에는 더 이상 불러올 데이터가 없다.
   			nomore: resLength === 20 ? false : true 
   		});
    
   		console.log(`길이 : ${resLength}, nomore : ${this.state.nomore}`);
   	} catch (error) {
   		console.log(`makeRemoteRequest Error : ${error}`);
   		this.setState({ error, isLoading: false, refreshing: false });
   	}
};
*/

class progress extends Component {
    constructor(props) {
        super(props);
    }
    receiveFromServer = async (mode) => {
        baseUrl = 'http://192.168.43.223:8000/stream/'
        options = {
            headers: {
                token: this.props.token,
                mode: mode,
                category: this.props.category,
            }
        }
        return await fetch(baseUrl, options).then(async response => {
            if (response.status == 200) {
                return await response.json();
            }else{
                this.stopProgress()
            }
        })
    }
    StartProgress = () => {
        const { navigation } = this.props;
        this.props.setProgress(0.0);

        this.value = setInterval(() => {
            if (this.props.progress < 0.8) {
                this.receiveFromServer('progress').then(res => {
                    prog = Number(res.progress)*0.8
                    this.props.setProgress(prog)
                })
            }else{
                this.stopProgress()
                this.receiveFromServer('result').then(res => {
                    this.props.setResult(res.textureGAN)
                    this.props.setRecommend(res.discoGAN)
                    navigation.navigate('Transpose')
                })
            }
        }, 2000);
    }
    stopProgress = () => {
        clearInterval(this.value);
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
                <Text style={{ fontSize: 20, }}>{parseFloat((this.props.progress * 100).toFixed(3))} % 진행됨</Text>
                </View>
                <ProgressBarAndroid styleAttr="Horizontal" progress={this.props.progress} indeterminate={false} />
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
    setRecommend: (data) => dispatch(actions.setRecommend(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(progress);