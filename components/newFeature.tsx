import React, { useEffect, useRef, useState } from "react"; // Import React
import { Text, Dimensions, StyleSheet, View } from "react-native"; // Add Dimensions import
import Video from 'react-native-video'; // Import Video from react-native-video

function NewFeature(props) {

    const [color, setColor] = useState('');
    const videoRef = useRef();

    useEffect(() => {
        console.log('useEffect');
        setColor('green');
    }, []);



    return (
        <View style={{ flex: 1 }}>

            <Video
                controls={true}
                source={props.code}
                ref={videoRef}
                onBuffer={() => { }}
                onError={() => { }}
                style={{
                    width: '100%',
                    height: 200,
                    backgroundColor: '#000',
                    position: "absolute"
                }}
                resizeMode={'stretch'}
                fullscreen={true}
            />


        </View>
    )

}


export default NewFeature;
