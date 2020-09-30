import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Footer = () => {
    return(
        <View>
            <TouchableOpacity>
                <Text>Hello 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Hello 2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Hello 3</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navItem: {
        display: 'flex'
    }
});
export default Footer;