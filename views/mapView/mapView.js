import React from 'react';
import {Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';

import Footer from '../../components/footer/footer';

const mapView = () => {

    

    const [region, setRegion] = React.useState({
        latitude: 37.3230,
        longitude: -122.0322,
        latitudeDelta: 0.0922, 
        longitudeDelta: 0.0421
    });

    Geolocation.getCurrentPosition((info =>  {

        setRegion({
            latitude: info.coords.latitude,
            longitude: info.coords.longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta
        });
        
    }));
   
    
    return(
        <View style={styles.mapContainer}>
            <MapView 
                initialRegion={region}
                onRegionChange={setRegion}
                style={styles.map}
            />
            <Footer style={{alignSelf: 'flex-end'}}/>
        </View>
            
    );

    
}
const styles ={
    mapContainer: {
        flex: 1
    },
    map: {
        flex: 1,
        width: '100%',
        marginTop: '5%',
        alignSelf: 'center',
        justifyContent: 'center'
    }
};

export default mapView;