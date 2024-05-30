import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import { colors } from "./palette";

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
}

const AppButton: React.FC<AppButtonProps> = (props) => (
  <TouchableOpacity {...props} style={[styles.appButtonContainer, props.style]} activeOpacity={0.6}>
    <Text style={styles.appButtonText}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  appButtonContainer: {
    elevation: 5,
    backgroundColor: colors.orange400,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 15,
    color: colors.gray50,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default AppButton;
