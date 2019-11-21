import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import * as actions from '../modules/ducks';
import { connect } from 'react-redux';
//import redux modules

class pattern extends Component {
    constructor(props) {
        super(props);
    }

    // 사진 선택, 사진 찍기 함수 구현
    getPermission = async () => {
        const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        }
    }
    getPermission2 = async () => {
        const { status } = await Permissions.getAsync(Permissions.CAMERA);
        if (status !== 'granted') {
            const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
        }
    }
    selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({});
        this.props.setPattern(result.uri);
    }
    componentDidMount() { // 유저가 거부했을 때 체크해보기
        this.getPermission();
        this.getPermission2();
    }
    selectColor = () => {
        console.log("함수는호출완료");
        const {navigation}=this.props;
        navigation.navigate('Palette');
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 2 }}></View>
                <View style={styles.menuRow}></View>
                <View style={styles.rowSpace1}></View>
                <View style={styles.rowLogo}>
                    <View style={{ flex: 1 }}></View>
                    <Image style={styles.sketch}
                        source={require('../icons/Pattern.png')} />
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={styles.rowSpace1}></View>
                <View style={styles.rowBtn}>
                    <View style={{ flex: 3 }}></View>
                    <TouchableOpacity
                        style={{ flex: 5, backgroundColor: '#7DC1E0' }}
                        onPress={this.selectImage}>
                        {/*이곳에 갤러리 버튼을 누르면 나올 갤러리 화면 연결해야함. 현재는 home으로 연결해놓음 */}
                        <View style={{ flex: 8 }}>
                            
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <Image style={styles.icon1}
                                    source={require('../icons/sketchIcon.png')} />
                            </View>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}></View>
                            <Text style={styles.btnText}> Gallery</Text>
                            <View style={{ flex: 1 }}></View>
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </TouchableOpacity>
                    <View style={{ flex: 3 }}></View>
                    <TouchableOpacity
                        style={{ flex: 5, backgroundColor: '#7DC1E0' }}
                        onPress={this.selectColor}>
                        {/*이곳에 팔레트 버튼을 누르면 나올 팔레트 화면 연결해야함. 현재는 home으로 연결해놓음 */}
                        <View style={{ flex: 8 }}>
                        <Text>
                            otherParam:{' '}
                            {this.props.pattern}
                        </Text>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <Image style={styles.icon2}
                                    source={require('../icons/Palette.png')} />
                            </View>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}></View>
                            <Text style={styles.btnText}>Palette</Text>
                            <View style={{ flex: 1 }}></View>
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </TouchableOpacity>
                    <View style={{ flex: 3 }}></View>
                </View>
                <View style={styles.rowSpace2}></View>
                <View style={{ flex: 1 }}></View>
                <View style={styles.rowFileName}>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 4 }}></View>
                    <View style={{ flex: 4 }}>
                    <Button title = "확인" onPress={() => navigation.navigate("Home")}></Button>
                    </View>
                    <View style={{ flex: 4 }}></View>
                    <View style={{ flex: 2 }}></View>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={styles.rowSpace3}></View>
            </View>
        );
    }
}

pattern.navigationOptions = {
    header: null
}

export default connect(
    (state) => ({
        pattern     : state.duck.get('pattern'),
    }), 
    (dispatch) => ({
        setPattern  : (data) => dispatch(actions.setPattern(data)),
    })
)(pattern);
