import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ReviewForm = (props) => {
    const [review, updateReview] = useState({reviewTitle: 'Title', reviewBody: 'Body', reviewValue: '5'});
    
    useEffect(() => {
        if(props.review !== undefined) {
            console.log(props.review)
            updateReview(props.review);
        }
    }, [])

    const postInformation = () => {
        return;
    }
    return(
        <SafeAreaView style={styles.view}>
            <View style={styles.viewBody}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={review.reviewTitle}
                        onChangeText={(text) => updateReview({...review, reviewTitle: text})}
                    />
                    <View style={{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center',marginTop: 20}}>
                        <Slider
                            minimumValue={1}
                            maximumValue={10}
                            step={1}
                            value={parseInt(review.reviewValue)}
                            onValueChange={value => updateReview({...review, reviewValue: value.toString()})}
                        style={{width: '70%', alignSelf: 'center'}}
                        />
                        <Text style={{fontSize: 20, marginLeft: 20}}>{review.reviewValue}</Text>
                    </View>
                    <TextInput
                        style={{...styles.input, ...styles.inputLarge}}
                        value={review.reviewBody}
                        onChangeText={(text) => updateReview({...review, reviewBody: text})}
                        placeholder='Body'
                        multiline={true}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.button} onPress={() => postInformation}>
                            <Text style={styles.buttonText}>Submit Review</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'stretch'
    },
    viewBody: {
        flex: 0
    },
    inputContainer: {
        flex: 0,
        display: 'flex',
        paddingTop: '27%',
        paddingBottom: '15%',
        marginTop: '25%',
        justifyContent: 'center'
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: 'rgba(233, 234, 243, 1)',
        borderRadius: 25,
        color: 'black'
    },
    inputLarge: {
        height: 200
    },
    buttonContainer: {
        marginTop: '5%'
    },
    buttonWrapper: {
        flex: 0,
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignSelf: 'center',
    },
    button: {
        flexDirection: 'row',
        margin: 20,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 15, 
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }, 
    footerSpacer: {
        flexDirection: 'column',
        alignSelf: 'center'
    }
})

export default ReviewForm;