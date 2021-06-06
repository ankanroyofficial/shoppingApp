import React from 'react'
import { View, Text, Dimensions, TouchableOpacity,FlatList,Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { catagory } from '../constants/ConstantData';
const { height, width } = Dimensions.get("window");
export default function CatagoryPage({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: height * 0.077, backgroundColor: '#232b40', flexDirection: 'row' }}>
                <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', paddingLeft: width * 0.01 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-left" size={width * 0.07} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, justifyContent: 'center', paddingLeft: width * 0.025 }}>
                    <Text style={{ fontSize: width * 0.048, fontWeight: 'bold', color: 'white' }}>Catagory</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Cart")} >
                        <Ionicons name="cart" size={width * 0.07} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: width * 0.023333333, marginVertical: width * 0.023333333 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={catagory}
                    numColumns={2}
                    renderItem={({item,index}) => (
                        <View style={{ height: width * 0.43, width: width * 0.43, backgroundColor: 'white', borderRadius: 5, elevation: 3, margin: width * 0.023333333, transform: [{ rotate: "7deg" }], justifyContent: "flex-end", paddingLeft: width * 0.04, paddingBottom: width * 0.04 }}>
                          <View style={{ flex: 4.5, }}>
                                <Image source={{ uri: item.image }} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: width * 0.04 }}>{item.title}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => item + index.toString()}
                />
            </View>
        </View>
    )
}
