import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native'
import {Camera} from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CameraView = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const snapPhoto = async () => {
        console.log('Button Pressed')
        const cameraOptions = {quality: 1, base64: true, fixOrientation: true, exif: true};
        await this.camera.takePictureAsync(cameraOptions)
            .then(picture => {
                console.log(picture.base64);
            })
        console.log('Picture Taken')
    }

    useEffect(() => {
        (async () => {
            const {status} = Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    return (<View style={{display: 'flex', flex: 1}}>
       <Camera ref={(ref) => {this.camera = ref}}style={{flex: 1}}>
           <View style={{flex: 1, backgroundColor: 'transparent'}}>

           </View>
           <TouchableOpacity onPress={snapPhoto} style={{height: '28%', width: '15%', alignSelf:'center', backgroundColor: 'red', borderRadius: 25, marginBottom: '-20%'}}/>
       </Camera>
    </View>)
}

export default CameraView;