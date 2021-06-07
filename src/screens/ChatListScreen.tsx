//screens/ChatListScreen.tsx

import React, { useState, useEffect } from 'react';
import { Card, Button, Header } from 'react-native-elements';
import {
    StyleSheet,
    TextInput,
    SafeAreaView,
    SafeAreaProvider,
    KeyboardAvoidingView,
    View,
    FlatList,
    Alert,
    Platform,
    StatusBar,
    ImageBackground
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import * as firebase from 'firebase';
import { name, photoUrl, getChatListDocRef, getUserId } from '../lib/firebase';
import { ChatList } from '../types/chatList';
import { ChatListItem } from '../components/ChatListItem';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import KeyboardSafeView from '../components/KeyboardSafeView';


export const ChatListScreen = () => {
    const [chatList, setList] = useState<ChatList[]>([]);
    const [userId, setUserId] = useState<string | undefined>();


    const getList = async () => {
        const chatList = [] as ChatList[];
        const uid = await getUserId();

        firebase
            .firestore()
            .collection('rooms')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(
                    (doc) => {
        //                setList(doc.id as any);
                });
            })
            .catch((error) => {
                Alert.alert("Error getting documents: ", error);
            });
    };

    const signin = async () => {
        const uid = await getUserId();
        setUserId(uid);
    };

    useEffect(() => {
        signin();
        getList();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ExpoStatusBar style="auto" />
            <Header 
                placement="center"
                leftComponent={{ icon: 'menu', color: '#94aa44' }}
                centerComponent={{ text: 'チャットユーザーリスト', style: { fontSize: 18, color: '#3d3d3d' } }}
                rightComponent={{ icon: 'home', color: '#94aa44' }}
                containerStyle={{ paddingBottom: 50}}
                backgroundColor='#eff4ef'
                backgroundImage={require('../../assets/images/chatback.png')}
                backgroundImageStyle={{height: 150, flex: 1 ,resizeMode: 'contain' ,bottom: 0}}
                >
             </ Header>
                <FlatList
                    style={styles.messagesContainer}
                    data={chatList}
                    inverted={true}
                    renderItem={({ item }: { item: ChatList }) => (
                        <ChatListItem userId={userId} item={item} />
                    )}
                    keyExtractor={(_, index) => index.toString()}
                />



        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    keyboardAvoidingView: {
        width: '100%',
        flex: 1
    },
    messagesContainer: {
        width: '100%',
        padding: 10
    },
    inputTextContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    inputText: {
        color: '#333',
        borderWidth: 0,
        
        backgroundColor: '#eff4ef',
        height: hp('3.6%'),
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginRight: 20

    }

});221