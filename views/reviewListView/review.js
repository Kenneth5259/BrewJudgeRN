import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Review = (props) => {
    const index = props.review.index;
    const review = props.review.item;
    const [collapsed, setCollapsed] = useState(true);
    return(
    <View style={index % 2 == 1 ? {...styles.review, ...styles.reviewOdd} : {...styles.review, ...styles.reviewEven}}>
        <TouchableOpacity style={styles.reviewHeader} onPress={() => setCollapsed(!collapsed)}>
            <Text style={styles.reviewTitle}>{review.reviewTitle}</Text>
            <Text style={styles.reviewValue}>{review.reviewValue}</Text>
        </TouchableOpacity>
        {collapsed ? null : 
            <Text style={styles.reviewBody}>{review.reviewBody}</Text>
        }
    </View>)
}

const styles = StyleSheet.create({
    review: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        width: '100%', 
        paddingLeft: '5%', 
        paddingRight: '5%',
    },
    reviewOdd: {
        backgroundColor: '#dbdbdb'
    },
    reviewEven: {
        backgroundColor: '#c2c2c2'
    },
    reviewHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxHeight: 50
    },
    reviewTitle: {
        fontSize: 24
    }, 
    reviewValue: {
        fontSize: 24
    }, 
    reviewBody: {
        fontSize: 20,
        padding: 5
    }
});

export default Review;