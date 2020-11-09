import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Review = ({review}) => {
    const [collapsed, setCollapsed] = useState(true);
    return(
    <View style={styles.review}>
        <TouchableOpacity style={styles.reviewHeader} onPress={() => {
            console.log(collapsed);
            setCollapsed(!collapsed);
        }}>
            <Text style={styles.reviewTitle}>{review.reviewTitle}</Text>
            <Text style={styles.reviewValue}>{review.reviewValue}</Text>
        </TouchableOpacity>
        {collapsed ? null : 
            <Text>{review.reviewBody}</Text>
        }
    </View>)
}

const styles = StyleSheet.create({
    review: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        width: '100%',
        borderWidth: 1, 
        borderColor: 'black', 
        paddingLeft: '5%', 
        paddingRight: '5%',
        marginBottom: 5
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
        fontSize: 24,
    }, 
    reviewValue: {
        fontSize: 24
    }
});

export default Review;