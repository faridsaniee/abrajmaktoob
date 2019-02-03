import React from 'react';

import {
    ActivityIndicator,
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class LoadingComponent extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <ActivityIndicator
                    size="large" color="#0000ff"
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10
    }
});
