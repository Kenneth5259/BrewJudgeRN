import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native'
import {Camera} from 'expo-camera';

const CameraView = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const {status} = Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    return (<View>
       <Camera></Camera>
    </View>)
}

export default CameraView;