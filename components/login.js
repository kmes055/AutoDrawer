import RNKakaoLogins from 'react-native-kakao-logins';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import * as actions from '../modules/ducks';
import { connect } from 'react-redux';

import styles from '../styles';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    // 카카오 로그인 하기
    kakaoLogin = () => {
        const { navigation } = this.props;
        RNKakaoLogins.login((err, result) => {
          if (err) {
            console.log(err.toString());
            return;
          }
          this.props.setToken(result.token);

          RNKakaoLogins.getProfile((err, result) => {
            if (err) {
              console.log(err.toString());
              return;
            }
            console.log(result)
            this.props.setUserId(result.id)
            this.props.setNickname(result.nickname)
            //this.props.setProfile(result.profile_image_path)
            if (this.props.nickname !== '닉네임') {
                navigation.navigate('Mypage');
            }
          })
        })
        return;
    }
    
    render() {
        const { navigation } = this.props;
        return (
        <View style={{flex: 4,backgroundColor: '#CAC0E4'}}>
            <View style={styles.rowSpace1}></View>
            <Button
                block
                style={{ backgroundColor: '#F7E314' }}
                title="Kakao Login"
                onPress={async () => {
                    this.kakaoLogin()
                }}>
                <Text style={{ color: '#3C1E1E', fontWeight: 'bold' }}>
                카카오 로그인
                </Text>
                
            </Button>
            
        </View>
        )
    }
}

LoginScreen.navigationOptions = {
    header: null
}

const mapStateToProps = (state) => ({
    nickname    : state.duck.nickname,
})

const mapDispatchToProps = (dispatch) => ({
    setToken    : (data) => dispatch(actions.setToken(data)),
    setUserId   : (data) => dispatch(actions.setUserId(data)),
    setNickname : (data) => dispatch(actions.setNickname(data)),
    setProfile  : (data) => dispatch(actions.setProfile(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);