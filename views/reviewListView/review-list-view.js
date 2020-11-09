import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';

import Review from './review';

const Reviews = [
    {
        id: 'alksjfhliuahjkjlhdjlkjclhlie',
        reviewTitle: 'test review 1',
        reviewBody: 'kinda okay', 
        reviewValue: '5'
    }, 
    {
        id: '2i3uphlp1981bp234iblce',
        reviewTitle: 'test review 2',
        reviewBody: 'kinda better', 
        reviewValue: '6'
    }, 
    {
        id: 'akjhdflhleiuwhq;bl3',
        reviewTitle: 'test review 3',
        reviewBody: 'kinda worse', 
        reviewValue: '4'
    },
    {
        id: '2i3uphlp1981bp234iblce4',
        reviewTitle: 'test review 4',
        reviewBody: 'kinda better', 
        reviewValue: '6'
    },
    {
        id: '2i3uphlp1981bp234iblce5',
        reviewTitle: 'test review 5',
        reviewBody: 'kinda better', 
        reviewValue: '6'
    },
    {
        id: '2i3uphlp1981bp234iblce6',
        reviewTitle: 'test review 6',
        reviewBody: 'kinda better', 
        reviewValue: '6'
    },
    {
        id: '2i3uphlp1981bp234iblce7',
        reviewTitle: 'test review 7',
        reviewBody: 'kinda better', 
        reviewValue: '6'
    },
    {
        id: '2i3uphlp1981bp234iblce8',
        reviewTitle: 'test review 8',
        reviewBody: 'kinda better', 
        reviewValue: '6'
    },
    {
        id: '2i3uphlp1981bp234iblce9',
        reviewTitle: 'test review 9',
        reviewBody: 'kinda better', 
        reviewValue: '10000'
    }
];

const ReviewListView = () => {

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [])

    
    return(
        <SafeAreaView>
            {isLoading ? 
            null : 
            <FlatList
                data={Reviews}
                renderItem={item => (<Review review={item.item}/>)}
                keyExtractor={review => review.id}
                contentContainerStyle={styles.reviewList}
            />  }
               
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    reviewList: {
      height: '100%'
    }
});


export default ReviewListView;