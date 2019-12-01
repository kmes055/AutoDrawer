/*

추가 구현 사항
myHistory.js (사용자가 지금까지 만든 사진들 모아놓는곳)
userName(화면에 띄울 사용자 이름), userInfo(사용자 정보)

login.js (로그인하는 화면)
userName

*/

import { createAction, handleActions } from 'redux-actions';
import { toHsv } from 'react-native-color-picker';

// Action types(predefined)
import types from './types';

// Define action(function name)
export const setSketch = createAction(types.SET_SKETCH);
export const setPattern = createAction(types.SET_PATTERN);
export const setOldColor = createAction(types.SET_OLDCOLOR);
export const setColor = createAction(types.SET_COLOR);
export const setProgress = createAction(types.SET_PROGRESS);
export const setResult = createAction(types.SET_RESULT);
export const setRecommend = createAction(types.SET_RECOMMEND);
export const setToken = createAction(types.SET_TOKEN);
export const setCategory = createAction(types.SET_CATEGORY);
export const setMyImage = createAction(types.SET_MYIMAGE);
export const setCheckPalette = createAction(types.SET_CHECKPALETTE);
export const setDiscoGANcomplete = createAction(types.SET_DISCOGANCOMPLETE);

// Default values
const baseState = ({
    sketch      : '파일uri',
    pattern     : '파일uri or 색상코드',
    oldColor    : '#FFFFFF',
    color       : toHsv('red'),
    progress    : 0,
    result      : '',
    recommend   : [],
    token       : '',
    category    : 'bag',
    myImage     : [ require('../icons/test_image/1.jpg'),
                    require('../icons/test_image/2.jpg'),
                    require('../icons/test_image/3.jpg'),
                    require('../icons/test_image/4.jpg') ],
    checkPalette: false,
    discoGANcomplete: false,
});

// Define reducers. actual implement here.
export default handleActions({
    [types.SET_SKETCH]      : ( state, action ) => { return Object.assign({}, state, { sketch       : action.payload }) },
    [types.SET_PATTERN]     : ( state, action ) => { return Object.assign({}, state, { pattern      : action.payload }) },
    [types.SET_OLDCOLOR]    : ( state, action ) => { return Object.assign({}, state, { oldColor     : action.payload }) },
    [types.SET_COLOR]       : ( state, action ) => { return Object.assign({}, state, { color        : action.payload }) },
    [types.SET_PROGRESS]    : ( state, action ) => { return Object.assign({}, state, { progress     : action.payload }) },
    [types.SET_RESULT]      : ( state, action ) => { return Object.assign({}, state, { result       : action.payload }) },
    [types.SET_RECOMMEND]   : ( state, action ) => { return Object.assign({}, state, { recommend    : action.payload }) },
    [types.SET_TOKEN]       : ( state, action ) => { return Object.assign({}, state, { token        : action.payload }) },
    [types.SET_CATEGORY]    : ( state, action ) => { return Object.assign({}, state, { category     : action.payload }) },
    [types.SET_MYIMAGE]     : ( state, action ) => { return Object.assign({}, state, { myImage      : action.payload }) },
    [types.SET_CHECKPALETTE]: ( state, action ) => { return Object.assign({}, state, { checkPalette : action.payload }) },
    [types.SET_DISCOGANCOMPLETE]: ( state, action ) => { return Object.assign({}, state, { discoGANcomplete : action.payload }) },

}, baseState);

////////////////////////////////////////////////
// Template
// 여기서 필요한 변수/함수들 뽑아가세요
////////////////////////////////////////////////

/*

const mapStateToProps = (state) => ({
    sketch      : state.duck.get('sketch'),
    pattern     : state.duck.get('pattern'),
    oldColor    : state.duck.get('oldColor'),
    color       : state.duck.get('color'),
    progress    : state.duck.get('progress'),
    result      : state.duck.get('result'),
    recommend   : state.duck.get('recommend'),
    token       : state.duck.get('token'),
    category    : state.duck.get('category'),
})

const mapDispatchToProps = (dispatch) => ({
    setSketch   : (data) => dispatch(actions.setSketch(data)),
    setPattern  : (data) => dispatch(actions.setPattern(data)),
    setOldColor : (data) => dispatch(actions.setOldColor(data)),
    setColor    : (data) => dispatch(actions.setColor(data)),
    setProgress : (data) => dispatch(actions.setProgress(data)),
    setResult   : (data) => dispatch(actions.setResult(data)),
    setRecommend: (data) => dispatch(actions.setRecommend(data)),
    setToken    : (data) => dispatch(actions.setToken(data)),
    setCategory : (data) => dispatch(actions.setCategory(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)();

*/