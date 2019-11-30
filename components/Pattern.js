import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getAsync, askAsync, CAMERA, CAMERA_ROLL } from 'expo-permissions';
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';

import * as actions from '../modules/ducks';
import styles from '../styles';

class pattern extends Component {
    constructor(props) {
        super(props);
        this.state = { check: 0, cancel:false, click:false };
    }
    getPermission = async (grant) => {
        const { status } = await getAsync(grant);
        if (status !== 'granted') {
            const { status, permissions } = await askAsync(grant);
        }
    }
    selectImage = async () => {
        this.setState({click:true});
        let result = await launchImageLibraryAsync({ 'base64': true });
        this.props.setPattern(result.base64);
        if (result.cancelled !== true) {
            this.setState({ check: 1 });
            this.props.setCheckPalette(false);
        }
        else
            this.setState({cancel:true});
    }
    checkSelectedGallery = () => {
        if (this.props.checkPalette !== true) {
            if (this.state.check === 1) {
                return (
                <View style={{ flex: 1 }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }}
                        source={require('../icons/check.png')} />
                </View>);
            }
            else if(this.state.cancel === false && this.state.check === 0 && this.state.click ===true){
                return (
                    <View style={{flex:1, justifyContent: 'center'}}>
                        <ActivityIndicator size="small" color="#a55eea"/>
                    </View>
                );
            }
        }
    }
    checkSelectedPalette = () => {
        if (this.props.checkPalette === true) {
            return (<View style={{ flex: 1 }}>
                <Image style={{ flex: 1, width: undefined, height: undefined }}
                    source={require('../icons/check.png')} />
            </View>);
        }
    }
    componentDidMount() { // 유저가 거부했을 때 체크해보기
        this.getPermission(CAMERA_ROLL);
        this.getPermission(CAMERA);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 2 }}></View>
                <View style={styles.menuRow}></View>
                <View style={styles.rowSpace1}></View>
                <View style={{
                    flex: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View style={{ flex: 1 }}></View>
                    <Image style={styles.sketch}
                        source={require('../icons/Pattern.png')} />
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 3 }}></View>
                <View style={{
                    flex: 2, flexDirection: 'row',
                }}>
                    {/*삽입시 생기는 체크표시 구현하기*/}
                    <View style={{ flex: 5 }}></View>
                    <View style={{ flex: 2 }}>
                        {this.checkSelectedGallery()}
                    </View>
                    <View style={{ flex: 7 }}></View>
                    <View style={{ flex: 2 }}>
                        {this.checkSelectedPalette()}
                    </View>
                    <View style={{ flex: 5 }}></View>
                </View>
                <View style={styles.rowBtn}>
                    <View style={{ flex: 3 }}></View>
                    <TouchableOpacity
                        style={{ flex: 5, backgroundColor: '#7DC1E0' }}
                        onPress={this.selectImage}>
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
                        onPress={() => navigation.navigate("Palette")}>
                        <View style={{ flex: 8 }}>
                            {/* <Text>
                            otherParam:{' '}
                            {this.props.pattern}
                        </Text> */}
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
                <View style={{
                    flex: 10,
                    flexDirection: 'row',
                }}>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 3 }}></View>
                    <View style={{ flex: 6 }}>
                        <Button title="확인" onPress={() => navigation.navigate("Home")} color='#a55eea'></Button>
                    </View>
                    <View style={{ flex: 3 }}></View>
                    <View style={{ flex: 2 }}></View>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 4 }}></View>
            </View>
        );
    }
}

pattern.navigationOptions = {
    header: null
}
export default connect(
    (state) => ({
        pattern: state.duck.pattern,
        checkPalette: state.duck.checkPalette
    }),
    (dispatch) => ({
        setPattern: (data) => dispatch(actions.setPattern(data)),
        setCheckPalette: (data) => dispatch(actions.setCheckPalette(data)),
    }),
)(pattern);
