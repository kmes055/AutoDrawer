import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import styles from '../styles';
import ducks from '../modules/ducks';
import { connect } from 'react-redux';
import * as actions from '../modules/ducks';

class transpose extends Component {
    constructor(props) {
        super(props);
        this.state={showDisco : false};
    }
    showDiscoGAN = () => {
        if(this.state.showDisco === false){
            return(
                <View style={{flex:1}}>
                <View style={{flex: 1}}></View>
                <TouchableOpacity
                        style={{ flex: 4, backgroundColor: '#a55eea', alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => this.setState({showDisco:true})}>
                        <Text style={styles.anotherGoodsBtn}>같은패턴 다른제품 보기</Text>
                        <Text style={styles.goBtnText}>Go!</Text>
                    </TouchableOpacity>
                <View style={{flex:1}}></View>
                </View>
            )
        }
        else if(this.state.showDisco === true){
            if(this.props.discoGANcomplete === false){
                return(
                <View style={{flex:1, justifyContent: 'center'}}>
                <ActivityIndicator size="large" color="#a55eea"/>
                </View>
                )
            }
            else{
            return(
                <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex: 4}}>
                        <Image style={styles.completeMain}
                        source={require('../icons/empty.png')} />
                    </View>
                    <View style={{flex:1}}></View>
                    <View style={{flex: 4}}>
                        <Image style={styles.completeMain}
                        source={require('../icons/empty.png')} />
                    </View>
                </View>
            )
            }
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 2 }}></View>
                <View style={styles.menuRow}>
                    <View style={{ flex: 7 }}></View>
                    <TouchableOpacity style={styles.menu}
                        onPress={() => navigation.toggleDrawer()}
                        title="Menu">
                        <Image style={styles.menuIcon}
                            source={require('../icons/menuIcon.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.rowSpace1}></View>
                <View style={styles.rowLogo}>
                    <View style={{ flex: 1 }}></View>
                    <Image style={{flex: 3,
        alignItems: "center",
        height: '130%',
        width: '130%',}}
                        source={require('../icons/logo.png')} />
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 3 }}>
                    <Text style={styles.transposeText1}>output:                             </Text>
                </View>
                <View style={{ flex: 20, alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 3 }}>
                        <Image style={styles.completeMain}
                            source={require('../icons/sample1.jpg')} />
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{
                    flex: 9,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{flex:4}}>
                    {this.showDiscoGAN()}
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 7 }}></View>
            </View>
        );
    }
}

transpose.navigationOptions = {
    header: null
}

export default connect(
    (state) => ({
        discoGANcomplete: state.duck.discoGANcomplete
    }),
    (dispatch) => ({
        setDiscoGANcomplete: (data) => dispatch(actions.setDiscoGANcomplete(data)),
    }),
)(transpose);