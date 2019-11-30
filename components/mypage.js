import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Icon, Container, Content, Left, Body, Right, Button } from 'native-base';
import * as FileSystem from 'expo-file-system';
import styles from '../styles';
import ImageView from 'react-native-image-view';

import * as actions from '../modules/ducks';
import { connect } from 'react-redux';

var images = [
    require('../icons/test_image/1.jpg'),
    require('../icons/test_image/2.jpg'),
    require('../icons/test_image/3.jpg'),
    require('../icons/test_image/4.jpg')
]

var {width, height} = Dimensions.get('window')

class Mypage extends Component {
    constructor(props) {
        super(props);
        this.state = {imageClick : false, curImage: null}
    }

    imageView = (image) => {
        return (
            <View style={{flex:1}}>
            <ImageView images={image}
            isVisible = {true}/>
            </View>
        )
    }

    renderImage = () => {
        return images.map((image, index) => {
            
            return (
                <View key={index} style={[{ width: (width)/3},{height:(width)/3},
                    {marginBottom: 2},
                index % 3 !== 0 ? { paddingLeft: 2}:{paddingLeft: 0}
                ]}>
                    <Image style={{flex: 1, width: undefined, height: undefined}}
                    source={image} onPress={(image)=>this.setState({curImage: image})} />
                </View>
            )
        })
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container style={{ flex: 1, backgroundColor: '#CAC0E4' }}>
                <View style={{ flex: 2 }}></View>
                <View style={styles.menuRow}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20 }}>마이페이지</Text>
                    </View>
                    <TouchableOpacity style={styles.menu}
                        onPress={() => navigation.toggleDrawer()}
                        title="Menu">
                        <Image style={styles.menuIcon}
                            source={require('../icons/menuIcon.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}></View>
                <View style={{ flex: 51 }}>
                    <Content>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <Image source={require('../icons/empty.png')}
                                style={{ width: 75, height: 75, borderRadius: 37.5 }} />
                        </View>
                        <View style={{ alignItems: 'center',paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>김준수</Text>
                        </View>
                        <View style={{flex:2}}></View>
                        <View style={{ flex: 6 }}>
                            <View style={{ flex: 3, justifyContent: 'center',flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ alignItems: 'center' }}>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 10, color: 'gray' }}>나만의 디자인 수</Text>
                                    <Text>4</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Button bordered dark
                                    style={{ flex: 2, marginLeft: 10, justifyContent: 'center', height: 30, marginTop: 10 }}>
                                    <Text>저장하기</Text>
                                </Button>
                                <Button bordered dark
                                    style={{ flex: 2, marginLeft: 10, justifyContent: 'center', height: 30, marginTop: 10 }}>
                                    <Text>삭제하기</Text>
                                </Button>
                            </View>
                        </View>
                        <Text> </Text>
                        <View style={{flex:1, flexDirection: 'row', flexWrap: 'wrap'}}>
                            {this.renderImage()}
                        </View>
                    </Content>
                </View >
            </Container >
        )
    }
}
Mypage.navigationOptions = {
    header: null
}

const mapStateToProps = (state) => ({
    image       : state.duck.Image,
})
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Mypage);