import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [nickname, setNickName] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/userdata`);
    ref
      .add({
        nickname,
      })
      .then((docRef) => {
        console.log('Created!', docRef.id);
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        });
      })
      .catch((error) => {
        console.log('Error!', error);
      });
  }

  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={nickname}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setNickName(text);
          }}
          autoFocus
        />
      </View>
      <CircleButton name="check" onPress={handlePress} />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
