import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, TextInput, Keyboard, ScrollView } from 'react-native';
import VideoCss from './videoCss';
import Right from 'react-native-vector-icons/Feather';
import Cross from 'react-native-vector-icons/AntDesign'
import Msg from './mes';
import TotMsg from './totMsg';
import AppButton from './AppButton';
import { colors } from './palette';
import firestore from '@react-native-firebase/firestore';
import NewFeature from './newFeature';


function Vid(props) {


  interface Qs {
    id: string;
    name: string,
    question: string;
    date: Date | null;
  }

  const [inputValue, setInputValue] = useState<string>("");
  const [qs, setQs] = useState<Qs[]>([]);

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handlePress = async () => {
    try {
      console.log("Adding data to Firestore...");
      const timestamp = new Date(); // Get current date and time
      const qsCollection = firestore().collection(props.route.params.code);
      await qsCollection.add({
        name: props.route.params.name,
        qs: inputValue,
        date: firestore.FieldValue.serverTimestamp() // Include current timestamp
      });
      console.log("Data added successfully.");
      setInputValue("");
      fetchQs();
    } catch (error) {
      console.error("Error adding data to Firestore:", error);
    }
  };




  //fetch

  useEffect(() => {
    fetchQs();
  }, []);

  const fetchQs = async () => {
    try {
      console.log("Fetching data...");
      const qsCollection = firestore().collection(props.route.params.code);
      const qsSnapshot = await qsCollection.get();
      const fetchedQs: Qs[] = [];
      qsSnapshot.forEach(doc => {
        const data = doc.data();
        const { id, qs: question, name, date } = data; // Extract the 'date' field from Firestore
        // Convert Firestore Timestamp to JavaScript Date
        const jsDate = date ? (date.toDate() as Date) : null;

        let dateString = "";
        let timeString = "";

        // Extract date and time separately
        if (jsDate) {
          // Date
          const options = { year: 'numeric', month: 'short', day: 'numeric' };
          dateString = jsDate.toLocaleDateString('en-US', options);

          // Time
          const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
          timeString = jsDate.toLocaleTimeString('en-US', timeOptions);
        }

        fetchedQs.push({ id, question, name, date: jsDate, dateString, timeString });
      });
      console.log("Fetched data:", fetchedQs);
      setQs(fetchedQs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };





  // const qs = [
  //   {
  //     id: "kjhg",
  //     qs: "Helooo"
  //   },
  //   {
  //     id: "oiuy",
  //     qs: "lkjhg"
  //   }
  // ]


  //videooooo
  const vidd = {
    'CC2024': {
      url: require('../img/cc.mp4'),
      topic: 'Cloud Computing Session',
      view: '1.5M views',
      desc: 'This Session was conducted by Sam professor at ABCD college, I hope you enjoy this guys!'
    },
    'DS2024': {
      url: require('../img/ds.mp4'),
      topic: 'Data Science Session',
      view: '2.5M views',
      desc: 'This Session was conducted by Alia prof at XYZ college, I hope you enjoy this guys!'
    }
  }

  const code1 = props.route.params.code;
  url = vidd[code1].url;

  const fullText = vidd[code1].desc;
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Function to trim text to 20 characters
  const trimText = (text) => {
    return text.length > 42 ? (
      <View style={{ width: 330 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ flex: 1 }}>{showMore ? text : text.slice(0, 41)}</Text>
          {!showMore && (
            <TouchableOpacity onPress={toggleShowMore}>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>more...</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    ) : (
      <Text>{text}</Text>
    );
  };


  const [scnHeight, setHeight] = useState(Dimensions.get('window').height);

  // Apply the trim function to the text
  const trimmedText = trimText(fullText);

  const [isOn, setOn] = useState(false);

  function onbutton() {
    setOn(true);
  }

  function offbutton() {
    setOn(false);
  }

  const comStyle = {
    ...VideoCss.com,
    height: isOn ? scnHeight - 255 : 'auto',
    backgroundColor: !isOn ? colors.gray300 : "white"
  };


  const [keyOn, setKeyOn] = useState(false);

  const search = {
    marginTop: isOn ? (keyOn ? scnHeight - 630 : 'auto') : scnHeight - 770,
  };

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);


  const [isClick, setClick] = useState(false);
  const [msg, setMsg] = useState("");

  const [text, setText] = useState("");

  useEffect(() => {
    if (isClick) {
      setMsg(text);
      setText("");
    }
  }, [isClick]);

  // video


  return (
    <View>
      <View style={{ marginBottom: 200 }}>
        <NewFeature code={url} />
      </View>


      <Text style={isOn ? { display: 'none' } : VideoCss.head}>{vidd[code1].topic}</Text>
      <Text style={isOn ? { display: 'none' } : VideoCss.hit}>{vidd[code1].view}</Text>
      <TouchableOpacity onPress={toggleShowMore}>
        <Text style={isOn ? { display: 'none' } : VideoCss.desc}>{trimmedText}</Text>
      </TouchableOpacity>


      <View style={comStyle}>
        <TouchableOpacity onPress={onbutton}>
          <View style={VideoCss.fl}>
            <View >
              <Text style={VideoCss.txt}>Q&A Session</Text>
              <Text >{qs.length} users commented</Text>
            </View>
            <View>
              <Cross name="close" style={{ opacity: isOn ? 1 : 0, fontSize: 18, fontWeight: "bold", height: 40, marginRight: 5 }} onPress={offbutton} />
            </View>
          </View>

        </TouchableOpacity>

        <TotMsg query={qs} />



        <View style={search}>
          <TextInput onChangeText={handleInputChange} style={[VideoCss.box, isKeyboardVisible && VideoCss.up]} placeholder='Add a question...' value={inputValue}></TextInput>
          <TouchableOpacity onPress={handlePress} style={[VideoCss.btn, isKeyboardVisible && VideoCss.btnUp]}>
            <Right name="send" size={20} color={colors.orange400} />
          </TouchableOpacity>

        </View>
      </View>


    </View>
  );
}

export default Vid;