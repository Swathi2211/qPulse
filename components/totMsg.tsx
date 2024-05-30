import React, { useEffect, useRef, useState } from "react";
import { ScrollView, View, Keyboard } from "react-native";
import Msg from "./mes";

function TotMsg(props) {
  const scrollViewRef = useRef();
  const [containerStyle, setContainerStyle] = useState({ flex: 1 });

  useEffect(() => {
    // Scroll to the bottom when component mounts or when new messages are added
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }

    // Add listeners for keyboard visibility
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setContainerStyle({ flex: 0.8 }); // Reduce container size when keyboard is shown
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setContainerStyle({ flex: 1 }); // Restore container size when keyboard is hidden
      }
    );

    // Clean up listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [props.query]);

  return (
    <View style={containerStyle}>
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          {props.query
            .slice()
            .sort((a, b) => {
              if (a.date && b.date) {
                return a.date.getTime() - b.date.getTime();
              }
              return 0;
            })
            .map((key, index) => (
              <Msg
                key={index}
                id1={key.name}
                qs={key.question}
                date={key.dateString}
                time={key.timeString}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default TotMsg;
