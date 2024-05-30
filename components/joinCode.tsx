import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import JoinCss from './joinCss';
import AppButton from './AppButton';
import Box from './box';
import { colors } from './palette';

function JoinCode(props) {
    // State variable to store the entered code
    const [codeVal, setCodeVal] = useState('');

    let data = [
        {
            "img": require("../img/guide.png"),
            "title": "Guides",
            "cont": "Browse our in-depth guides to help you get started",
            "btn": "View Guides",
            "bg": colors.purple200
        },
        {
            "img": require("../img/webinar.jpg"),
            "title": "Webinars",
            "cont": "Watch recorded webinars to level up your knowledge",
            "btn": "Watch Webinars",
            "bg": "Transparent"
        },
        {
            "img": require("../img/account.png"),
            "title": "Account",
            "cont": "Learn more about how to manage your QPulse account",
            "btn": "Learn More",
            "bg": "#ffd8b1"
        },
    ];

    console.log("\n\nHelloooooo");
    console.log(props.route.params.name);

    // Function to handle TextInput value change
    const handleCodeChange = (text) => {
        setCodeVal(text); // Update codeVal state with the entered text
    };

    return (
        <View style={JoinCss.parent}>
            <View style={JoinCss.imgView}>
                <Image
                    style={JoinCss.img1}
                    source={require('../img/semi.png')}
                />
            </View>
            <View style={JoinCss.Cont}>
                <Text style={JoinCss.txt}>Need a hand?</Text>
                <Text style={JoinCss.txt}>We've got you.</Text>
                <View style={JoinCss.merge}>
                    <TextInput
                        style={JoinCss.inp}
                        placeholderTextColor='black'
                        placeholder='Enter Code'
                        value={codeVal} // Bind the value of TextInput to codeVal state
                        onChangeText={handleCodeChange} // Handle TextInput value change
                    />
                    <AppButton
                        onPress={() => props.navigation.navigate("Video", { name: props.route.params.name, code: codeVal   })}
                        style={JoinCss.joinBtn}
                        title="Join"
                    />
                </View>
            </View>
            <View style={JoinCss.split}>
                <Box data={data} />
            </View>
        </View>
    );
}

export default JoinCode;
