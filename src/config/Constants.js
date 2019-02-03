import {
    Platform
} from 'react-native';

export const fonts = Platform.OS === 'ios' ? {
    normal: {
        fontFamily: 'IRANSansMobile',
    },
    bold: {
        fontFamily: 'IRANSansMobile',
        fontWeight: 'bold'
    }
} : {
    normal: {
        fontFamily: 'IRANSansMobile'
    },
    bold: {
        fontFamily: 'IRANSansMobile_Bold'
    }
};

export const colors = {
    primary : '#3ec1cf'
};