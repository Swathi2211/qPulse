import React, { useEffect, useState } from "react";
import { TextInput, View, Text } from "react-native";
import firestore from '@react-native-firebase/firestore';
import AppButton from "./AppButton";

interface Qs {
    id: string;
    question: string;
    date: Date; // Add the 'date' property to the interface
}

function SendMsg() {
    const [inputValue, setInputValue] = useState<string>(""); 
    const [qs, setQs] = useState<Qs[]>([]); 

    useEffect(() => {
        fetchQs();
    }, []);

    const fetchQs = async () => {
        try {
            console.log("Fetching data...");
            const qsCollection = firestore().collection('CC2024');
            const qsSnapshot = await qsCollection.get();
            const fetchedQs: Qs[] = [];
            qsSnapshot.forEach(doc => {
                const data = doc.data();
                const { id } = doc;
                const { qs: question, date } = data; // Extract the 'date' field from Firestore
                fetchedQs.push({ id, question, date: date.toDate() }); // Include 'date' in the fetched data
            });
            console.log("Fetched data:", fetchedQs);
            setQs(fetchedQs);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleInputChange = (text: string) => {
        setInputValue(text); 
    };

    const handlePress = async () => {
        try {
            console.log("Adding data to Firestore...");
            const timestamp = new Date(); // Get current date and time
            const qsCollection = firestore().collection('CC2024');
            await qsCollection.add({ qs: inputValue, date: timestamp }); // Include current date and time
            console.log("Data added successfully.");
            setInputValue(""); 
            fetchQs(); 
        } catch (error) {
            console.error("Error adding data to Firestore:", error);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Name"
                value={inputValue}
                onChangeText={handleInputChange}
            />
            <AppButton title="Submit" onPress={handlePress} />
            <AppButton title="Show" onPress={fetchQs} />
            <View>
                {qs.map(q => (
                    <Text key={q.id}>{q.question}</Text>
                ))}
            </View>
        </View>
    );
}

export default SendMsg;
