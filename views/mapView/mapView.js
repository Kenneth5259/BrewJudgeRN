import React from 'react';
import {Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const mapView = () => {
    const currentLocation = Geolocation.getCurrentPosition((info => console.log("latitude: " + info.coords.latitude + " longitude: " + info.coords.longitude)));
    
    return(
        <View>
            <Text>Location Console Log</Text>
        </View>
    );
}

export default mapView;