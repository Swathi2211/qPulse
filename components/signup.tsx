import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import SignCss from './signCss';
import AppButton from './AppButton';
import { colors } from './palette';
import firestore from '@react-native-firebase/firestore';

interface User {
    id: string;
    name: string;
    password: string;
}

const SignUp = (props) => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [err, setErr] = useState(false);

    const handleNameChange = (text: string) => {
        setName(text);
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };

    const handlePress = async () => {
        try {
            console.log("Adding data to Firestore...");
            const usersCollection = firestore().collection('user');
            await usersCollection.add({ name: name, password: password });
            console.log("Data added successfully.");
            setName("");
            setPassword("");
        } catch (error) {
            console.error("Error adding data to Firestore:", error);
        }
    };

    const checkPasswordStrength = (password: string): boolean => {
        const uppercaseRegex = /[A-Z]/;
        const specialCharRegex = /[^A-Za-z0-9]/;
        const numberRegex = /[0-9]/;

        const hasUppercase = uppercaseRegex.test(password);
        const hasSpecialChar = specialCharRegex.test(password);
        const hasNumber = numberRegex.test(password);

        return hasUppercase && hasSpecialChar && hasNumber;
    };

    return (
        <ScrollView style={SignCss.whole}>
            <View style={SignCss.parent}>
                <View style={SignCss.imgView}>
                    <Image
                        source={require('../img/sign.jpg')}
                        style={SignCss.img}
                    />
                </View>
                <Text style={SignCss.txt}>Register</Text>
                <Text style={SignCss.head}>Create Account</Text>
                {err && (
                    <Text style={SignCss.err}>Password must contain at least 1 uppercase letter, 1 special character, and 1 digit</Text>
                )}
                <TextInput value={name} onChangeText={handleNameChange} placeholderTextColor='black' style={SignCss.input} placeholder='Username' />
                <TextInput value={password} onChangeText={handlePasswordChange} placeholderTextColor='black' style={SignCss.input} placeholder='Password' secureTextEntry />
                <View style={SignCss.butLog}>
                    <AppButton onPress={async () => {
                        if (!checkPasswordStrength(password)) {
                            setErr(true);
                            return;
                        }
                        setErr(false);
                        await handlePress();
                        props.navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }],
                        });
                    }} title="Sign up" />
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUp;
