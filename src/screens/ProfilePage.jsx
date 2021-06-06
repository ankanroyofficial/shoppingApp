import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, } from 'react-native'
import { Entypo } from '@expo/vector-icons';
const { height, width } = Dimensions.get("window");
export default function ProfilePage({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: height * 0.077, backgroundColor: '#232b40', flexDirection: 'row' }}>
                <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', paddingLeft: width * 0.01 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-left" size={width * 0.07} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, justifyContent: 'center', paddingLeft: width * 0.025 }}>
                    <Text style={{ fontSize: width * 0.048, fontWeight: 'bold', color: 'white' }}>Profile</Text>
                </View>
                <View style={{ flex: 1, }}>
                </View>
            </View>
        </View>
    )
}
