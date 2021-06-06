import React from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");

export default function TopHeader(props) {
    return (
        <View style={{ height: height * 0.15, backgroundColor: '#232b40', paddingHorizontal: width * 0.035 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                        <Feather name="menu" size={width * 0.07} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 5.5, flexDirection: 'row'  }}>
                    <View style={{ height: height * 0.07, width: height * 0.07, }}>
                        <Image source={require("../assets/image/logo.png")} style={{ height: "100%", width: '100%', resizeMode: 'cover' }} />
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                        <Text numberOfLines={1} style={{ fontSize: width * 0.05, width: width * 0.35, color: 'white' }} >Haldia,purba Medinipur</Text>
                        {/* <Ionicons name="location-sharp" size={width * 0.05} color="white" /> */}

                    </View>

                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Cart")}>
                        <Ionicons name="cart" size={width * 0.07} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate("SearchPage")} style={{ height: '85%', width: "100%", backgroundColor: 'white', flexDirection: 'row', borderRadius: 5 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="search-outline" size={width * 0.06} color="black" />
                    </View>
                    <View style={{ flex: 6, justifyContent: 'center' }}>
                        <Text>search 10000+Products</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="mic" size={width * 0.06} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ height: height * 0.01 }}></View>
        </View>
    )
}
