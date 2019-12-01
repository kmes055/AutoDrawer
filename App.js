import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import { Provider } from 'react-redux';
import store from './store';

import Home from './components/home';
import Mypage from './components/mypage';
import Sketch from './components/Sketch';
import Pattern from './components/Pattern';
import Transpose from './components/transpose';
import MyHistory from './components/myHistory';
import Tutorial from './components/tutorial';
import Progress from './components/ProgressBarComponent.android';
import About from './components/about';
import Palette from './components/Palette';
import ProgressBar from './components/ProgressBarComponent.android';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

const RootStack = createStackNavigator({
        Home:Home,
        Sketch,
        Pattern,
        Transpose,
        Progress,
        Palette,
        Mypage,
        Tutorial,
    },
    { initialRouteName: 'Home' }
);
const DrawerNav = createDrawerNavigator({
    Back: RootStack,
    Home:Home,
    Tutorial: Tutorial,
    Transpose: Transpose,
    마이페이지: Mypage,
    진행바:ProgressBar,
},
    {   
        drawerPosition: 'right',
        drawerBackgroundColor: "#FCF6E4"
    });
    
const AppNavigator = createSwitchNavigator({
    Drawer: DrawerNav,
    stack: RootStack,
});
const AppContainer = createAppContainer(AppNavigator);
class App extends Component {
    state = {
        isReady: false,
    };
    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._cacheResourcesAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }
        return (
            <Provider store={store}>
                <AppContainer /> 
            </Provider>
        );
    }
    async _cacheResourcesAsync() {
        
        const images = [require('./icons/logo.png')];

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        });
        return Promise.all(cacheImages);
    }
}

export default App;