//components/MessageItem.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { Message } from '../types/message';
import { Avatar } from 'react-native-elements';
// import { photoUrl } from '../lib/firebase';

type Props = {
    userId: string | undefined;
    item: Message;
};

export const MessageItem: React.FC<Props> = ({ item, userId }: Props) => {
    if(userId == item.userId){
        return(
            <View 
                style={{
                    alignSelf: 'flex-end',
                    flexDirection: 'row-reverse'
                }}>
                <View 
                        style={{
                            backgroundColor: '#8fc31f',
                            padding: 12,
                            maxWidth: '80%',
                            borderRadius: 20,
                            borderTopRightRadius: 0,
                            marginBottom: 5
                            
                        }}>
                    <Text style={userId == item.userId ? { color: '#fff' } : {}}>
                        {item.text}
                    </Text>
                </View>
            </ View>
        )
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
                    onPress={() => console.log("Works!")}
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
                <Text style={userId == item.userId ? { color: '#fff' } : {}}>
                    {item.text}
                </Text>
            </View>
        </View>
    );
};