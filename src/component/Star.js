import React from 'react';

import {
    View,
    Icon
} from 'native-base';

import {Alert} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

export default class Star extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: [
                {
                    icon: 'ios-star-outline'
                }, {
                    icon: 'ios-star-outline'
                }, {
                    icon: 'ios-star-outline'
                }, {
                    icon: 'ios-star-outline'
                }, {
                    icon: 'ios-star-outline'
                }
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderStar()}
            </View>
        )
    }

    renderStar() {

        let stars = this.state.stars;

        let starsElement = [];

        let starCount = 0;

        stars.map((item, index)=> {
            starsElement.push(<Icon style={styles.star} key={`${starCount += 1}`}
                                    name={index <= this.props.index ? 'ios-star' : item.icon}/>)
        });

        return starsElement;
    }

}

const styles = EStyleSheet.create({
    container: {
        width: 200,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    star: {
        color: 'gold'
    }
});