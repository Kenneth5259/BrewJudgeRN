import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';



const BrewMap = (navigation) => {

    const [region, setRegion] = useState(undefined);

    useEffect(() => {
        Geolocation.getCurrentPosition((position) => {
            console.log(position.coords)
            reg = {
                latitude: parseFloat(position.coords.latitude),
                longitude: parseFloat(position.coords.longitude),
                latitudeDelta: 0.0295,
                longitudeDelta: 0.0200
            };
            setRegion(reg)
        });
    }, []);

    
    return(
        (region !== undefined) ? <View style={styles.mapContainer}>
            <MapView 
                region={region}
                showsUserLocation={true}
                onRegionChange={setRegion}
                style={styles.map}
            />
        </View> : null
            
    );

    
}
const styles ={
    mapContainer: {
        flex: 1
    },
    map: {
        flex: 1,
        width: '100%',
        marginTop: '0%',
        alignSelf: 'center',
        justifyContent: 'center'
    }
};

export default BrewMap;