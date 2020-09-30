import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Footer = () => {
    return(
        <View style={{justifyContent: 'flex-end'}}>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navItemText}>Hello 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navItemText}>Hello 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navItemText}>Hello 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navItemText}>Hello 4</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black'
    },
    navItem: {
        backgroundColor: 'black',
        justifyContent: 'center',
        height: 75, 
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    navItemText: {
        textAlign: 'center',
        color: 'white'
    }
});
export default Footer;