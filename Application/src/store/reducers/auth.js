 import AsyncStorage from '@react-native-async-storage/async-storage';
const data = {
    'host':'http://192.168.0.104:8000/',
    'firstName':'',
    'lastName':'',
    'accessToken':'',
    'loggedIn':false,
};

const reducer = (state = data, action) => {
    switch (action.type) {
        case 'LOGOUT':
                AsyncStorage.setItem('loggedIn', 'false')
            return {
                ...state,
                loggedIn: action.logged
            };
        case 'LOGIN':
            return {
                ...state,
                loggedIn: action.logged
            };
        case 'SETSTATE':
            return {
                ...state,
                loggedIn: action.stata
            };
        case 'CHANGE_TOKEN':
            return {
                ...state,
                accessToken: action.token
            };
        default:
            return state;
    }
};
export default reducer;