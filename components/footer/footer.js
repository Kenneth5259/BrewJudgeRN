import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Footer = () => {
    return(
        <View style={{justifyContent: 'flex-end'}}>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navItemText}>{"Brew\nView"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navItemText}>{"Brew\nMap"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navItemText}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navItemText}>{"User\nInfo"}</Text>
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