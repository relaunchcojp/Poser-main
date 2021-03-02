//components/ChatListItem.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
// import { photoUrl } from '../lib/firebase';
import { ChatList } from '../types/chatList';

type Props = {
    userId: string | undefined;
    item: ChatList;
};

export const ChatListItem: React.FC<Props> = ({ item, userId }: Props) => {
    if(userId == item.userId){

    }
    return (
        <View
                style={{
                alignSelf: 'flex-start',
                flexDirection: 'row'
            }}>
           <Avatar
  //                  source={photoUrl}
                    source={require('../../assets/images/profile_placeholder.png')}
                    size="small"
                    rounded
                    icon={{ name: 'user', type: 'font-awesome', color: 'red' }}
                    activeOpacity={0.7}
                    containerStyle={{marginRight: 10 }} 
            />
            <View
                style={{
                        backgroundColor: '#eff4ef',
                        padding: 12,
                        maxWidth: '80%',
                        borderRadius: 20,
                        borderTopLeftRadius: 0,
                        marginBottom: 5
                    }}>
                <Text style={userId == item.userId ? { color: '#333' } : {}}>
                   表示される {item.userId}
                </Text>
            </View>
        </View>
    );
};