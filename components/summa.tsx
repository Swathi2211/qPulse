import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

const InsertDataScreen = () => {
    useEffect(() => {
        // Insert data when component mounts
        insertData();
    }, []);

    const insertData = async () => {
        try {
            console.log("Adding data to Firestore...");
            const qsCollection = firestore().collection('2024');

            // Array of random cloud computing questions
            const data = [
                { name: "Rajesh", qs: "What good from clouds?", date: 2024-05-09T01:24:26.725Z },
            ];

            // Insert each data entry into the collection
            data.forEach(async (item) => {
                await qsCollection.add(item);
            });

            console.log("Data inserted successfully.");
        } catch (error) {
            console.error("Error inserting data to Firestore:", error);
        }
    };

    return null; // This component doesn't render anything visible
};

export default InsertDataScreen;
