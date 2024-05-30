import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import loginCss from './loginCss';
import AppButton from './AppButton';
import { colors } from './palette';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

interface User {
    id: string;
    name: string;
    password: string;
}

const Login = (props) => {

    const navigation = useNavigation();

    const [user, setUser] = useState<User[]>([]);
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [err, setErr] = useState(false);

    const handleNameChange = (text: string) => {
        setName(text);
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };

    const fetchUsers = async () => {
        try {
            console.log("Fetching user data...");
            const usersCollection = firestore().collection('user');
            const usersSnapshot = await usersCollection.get();
            const fetchedUsers: User[] = [];
            usersSnapshot.forEach(doc => {
                const data = doc.data();
                const { id } = doc;
                const { name, password } = data;
                fetchedUsers.push({ id, name, password });
            });
            console.log("Fetched user data:", fetchedUsers);
            setUser(fetchedUsers);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []); // Empty dependency array to ensure the effect is only run once on component mount

    const checkCredentials = () => {
        const match = user.some(u => u.name === name && u.password === password);
        console.log("Credentials match:", match);
        if (match) {
            props.navigation.navigate("Home", { name: name });
        } else {
            setErr(true);
        }
    };

    return (
        <ScrollView style={loginCss.whole}>
            <View style={loginCss.parent}>
                <View style={loginCss.imgView}>
                    <Image
                        source={require('../img/wom1.jpg')}
                        style={loginCss.img}
                    />
                </View>
                <Text style={loginCss.txt}>Welcome Back</Text>
                <Text style={loginCss.head}>Account Log In</Text>
                {err && (
                    <Text style={loginCss.err}>Enter valid credentials</Text>
                )}
                <TextInput onChangeText={handleNameChange} placeholderTextColor='black' style={loginCss.input} placeholder='Username' />
                <TextInput onChangeText={handlePasswordChange} placeholderTextColor='black' style={loginCss.input} placeholder='Password' secureTextEntry />
                <View style={loginCss.butLog}>
                    <AppButton onPress={checkCredentials} title="Login" />
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
                    <Text style={{ color: colors.blue900, marginLeft: 177 }}>Doesn't have an account?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Login;
