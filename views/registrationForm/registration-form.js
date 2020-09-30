import React from 'react';
import {StyleSheet, TextInput, View, Text,TouchableOpacity} from 'react-native';

const RegistrationForm = ({navigation}) => {
    const [email, onChangeEmail] = React.useState("");
    const [emailConfirm, onChangeEmailConfirm] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [passConfirm, onChangePassConfirm] = React.useState("");

    return(
        <View style={styles.view}>
            <TextInput
                onChangeText={text => onChangeEmail(text)}
                value={email}
                placeholder="Email"
                style={styles.input}
            />
            <TextInput
                onChangeText={text => onChangeEmailConfirm(text)}
                placeholder="Confirm Email"
                value={emailConfirm}
                style={styles.input}
            />
            <TextInput
                onChangeText={text => onChangePassword(text)}
                secureTextEntry={true}
                placeholder="Password"
                value={password}
                style={styles.input}
            />
            <TextInput
                onChangeText={text => onChangePassConfirm(text)}
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={passConfirm}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={() => postInformation(email, emailConfirm, password, passConfirm)}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Log In')}>
                <Text style={styles.buttonText}>Switch to Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const postInformation = (email, emailConfirm, password, passConfirm) => {
    console.log(`Email: ${email} \nEmailConfirm: ${emailConfirm} \nPassword: ${password} \nPassConfirm: ${passConfirm}\n`);
}

const styles = StyleSheet.create({
    view: {
        marginTop: 175
    },
    input: {
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: 'rgba(233, 234, 243, 1)',
        borderRadius: 25,
        color: 'black'
    },
    button: {
        margin: 20,
        marginLeft: 100,
        marginRight: 100,
        backgroundColor: 'black',
        padding: 15, 
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
})

export default RegistrationForm;