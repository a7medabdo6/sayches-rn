import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import FeedScreen from "./app/screens/feed/Feed";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

import { Provider } from "react-redux";
import { createStore } from "redux";
import { postReducer } from "./app/store/reducers";
// Font Family //
const fetchFont = () => {
  return Font.loadAsync({
    "Poppins-Regular": require("./app/assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./app/assets/fonts/poppins/Poppins-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [postData, setPostData] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ]);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => alert(err)}
      />
    );
  }

  return (
    <Provider store={createStore(postReducer)}>
      <View style={styles.app}>
        <FeedScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  app: {
    marginTop: statusBarHeight,
  },
});
