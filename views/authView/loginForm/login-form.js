import React from 'react';
import {StyleSheet, TextInput, View, Text,TouchableOpacity} from 'react-native';

const LoginForm = ( {navigation} ) => {
    const [email, onChangeEmail] = React.useState("Enter Email");
    const [password, onChangePassword] = React.useState("Enter Password");

    return(
        <View style={styles.view}>
            <View style={styles.viewBody}>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={text => onChangeEmail(text)}
                        value={email}
                        placeholder="Email"
                        style={styles.input}
                    />
                    <TextInput
                        onChangeText={text => onChangePassword(text)}
                        secureTextEntry={true}
                        placeholder="Password"
                        value={password}
                        style={styles.input}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.button} onPress={() => postInformation}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
            </View>
        </View>
    );
}

const postInformation = (email, emailConfirm, password, passConfirm) => {
    console.log(`Email: ${email} \nEmailConfirm: ${emailConfirm} \nPassword: ${password} \nPassConfirm: ${passConfirm}\n`);
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'stretch'
    },
    viewBody: {
        flex: 0,
        marginTop: '20%'
    },
    inputContainer: {
        flex: 0,
        paddingTop: '27%',
        paddingBottom: '15%',
        marginTop: '25%'
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: 'rgba(233, 234, 243, 1)',
        borderRadius: 25,
        color: 'black'
    },
    buttonContainer: {
        marginTop: '5%'
    },
    buttonWrapper: {
        flex: 0,
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignSelf: 'center',
    },
    button: {
        flexDirection: 'row',
        margin: 20,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 15, 
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }, 
    footerSpacer: {
        flexDirection: 'column',
        alignSelf: 'center'
    }
})

export default LoginForm;