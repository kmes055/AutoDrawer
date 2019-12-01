import React, { Component } from 'react';
import {View,Dimensions} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import Slideshow from 'react-native-image-slider-show';
var {height, width} = Dimensions.get('window');

class Tutorial extends Component {
    constructor(props) {
        super(props);
    }
render(){
    return(
    <View style={{flex: 1,backgroundColor: '#CAC0E4'}}>
        <Slideshow 
      dataSource={[
        {url:'https://github.com/kmes055/AutoDrawer/blob/jy_app/icons/1.jpg?raw=true'},
        {url:'https://github.com/kmes055/AutoDrawer/blob/jy_app/icons/2.jpg?raw=true'},
        {url:'https://github.com/kmes055/AutoDrawer/blob/jy_app/icons/3.jpg?raw=true'},
        {url:'https://github.com/kmes055/AutoDrawer/blob/jy_app/icons/4.jpg?raw=true'},
        {url:'https://github.com/kmes055/AutoDrawer/blob/jy_app/icons/5..jpg?raw=true'},
        {url:'https://github.com/kmes055/AutoDrawer/blob/jy_app/icons/6.jpg?raw=true'},
    ]}
    height = {height}
    scrollEnabled={false}/> 
    </View>
);
    }
}
Tutorial.navigationOptions = {
    header: null
}
export default Tutorial;