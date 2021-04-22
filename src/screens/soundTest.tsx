import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { Audio } from "expo-av";

const imageLocation = "../../assets/icon/";
const soundLocation = "../../assets/Voice/";

const soundObject = new Audio.Sound();

export default BibliothequeScreen = ({ navigation }) => {
  const [playing, setPlaying] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(false);

  const playAudio = async (key, sound) => {
    console.log(key, playing, soundPlaying);
    try {
      if (playing) {
        await soundObject.pauseAsync();
        setPlaying(false);
      } else {
        setPlaying(true);
        await soundObject.loadAsync(
          require(soundLocation + "/立位ヨコ_基本姿勢.mp3")
        );
        await soundObject.playAsync();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sound}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={
                () => playAudio(item.key, item.soundPath)
                // item.key == playing ? setPlaying(false) : setPlaying(item.key)
              }
              style={styles.item}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.imageContainer}>
                  <Image source={item.path} style={styles.image}></Image>
                </View>
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <Feather
                name={playing && item.key === soundPlaying ? "pause" : "play"}
                size={35}
                color='#3D425C'
              ></Feather>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};