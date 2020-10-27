import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Camera} from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';

import axios from 'axios';

const CameraView = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const snapPhoto = async () => {
        console.log('Button Pressed')
        const cameraOptions = {quality: 0, base64: true, fixOrientation: true, exif: false};
        await this.camera.takePictureAsync(cameraOptions)
            .then(picture => {
                
                axios.post('http://192.168.1.7:3000/scan/image', {image: picture})
                    .then()
                    .catch(err => console.error(err));

            })
        console.log('Picture Taken')
    }

    useEffect(() => {
        (async () => {
            const {status} = Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    return (
    <View style={styles.mainView}>
       <Camera ref={(ref) => {this.camera = ref}}style={{flex: 1}}>
           <View style={{flex: 1, backgroundColor: 'transparent'}}>

           </View>
           <TouchableOpacity onPress={snapPhoto} style={styles.cameraButton}/>
       </Camera>
    </View>)
}

const styles = StyleSheet.create({
    mainView : {
        display: 'flex', flex: 1
    },
    cameraButton: {
        borderColor: 'white',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderWidth: 2,
        borderRadius: 40,
        alignSelf: 'center',
        marginBottom: 25,
        height: 80,
        width: 80
    }
});

export default CameraView;