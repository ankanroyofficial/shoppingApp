import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colours } from '../constants/Rang';
import { Data } from '../constants/ConstantData';
const { height, width } = Dimensions.get("window");
export default function ProductList({ navigation }) {
    const [press, setPress] = useState(true)
    const [cart, setCart] = useState(0)
    const [abc, setAbc] = useState()

    const click = () => {
        setPress(!press)
        setCart(1)

    }
    const add = () => {
        setCart(cart + 1)

    }
    const minus = () => {
        cart <= 1 ?
            setPress(!press) || setCart(0)
            : setCart(cart - 1)
    }
    //   console.log('#'+(Math.random()*0xFFFFFF<<0).toString(16))
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: height * 0.077, backgroundColor: '#232b40', flexDirection: 'row' }}>
                <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', paddingLeft: width * 0.01 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-left" size={width * 0.07} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, justifyContent: 'center', paddingLeft: width * 0.025 }}>
                    <Text style={{ fontSize: width * 0.048, fontWeight: 'bold', color: 'white' }}>Buy & get Free</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <TouchableOpacity><FontAwesome name="search" size={width * 0.06} color="white" /></TouchableOpacity>
                    <TouchableOpacity><MaterialIcons name="shopping-cart" size={width * 0.07} color="white" /></TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#DCDCDC' }}>
                <FlatList
                    data={Data}
                    renderItem={({ item, index }) => (
                        <View style={{ height: height * 0.2, flexDirection: 'row', backgroundColor: 'white', marginBottom: height * 0.01 }}>
                            <View style={{ justifyContent: 'center' }}>
                                <View style={{ height: height * 0.17, width: height * 0.17, backgroundColor: 'white', flexDirection: 'row' }}>
                                    <View style={{ flex: 2.9 }}>
                                        <Image source={require("../assets/image/butter.jpeg")} style={{ height: "100%", width: '100%', resizeMode: 'center' }} />
                                    </View>
                                    {/* <View style={{ flex: 1, backgroundColor: '#FF4500', justifyContent: 'center', alignItems: "center", paddingBottom: height * 0.07 }}> */}
                                    <View style={{ flex: 1, backgroundColor: ('#' + (Math.random() * 0xEEEEEE << 0).toString(16)), justifyContent: 'center', alignItems: "center", paddingBottom: height * 0.07 }}>
                                        <Text style={{ color: "white", transform: [{ rotate: '270deg' }], fontSize: width * 0.03, fontWeight: "bold", letterSpacing: 0.5, width: height * 0.1 }}>Amul Butter</Text>
                                    </View>
                                    <View style={{ height: height * 0.018, width: height * 0.018, position: 'absolute', bottom: 5, left: 5, borderWidth: 1, borderColor: "green", justifyContent: 'center', alignItems: 'center' }}>
                                        <Octicons name="primitive-dot" size={width * 0.04} color="green" />
                                    </View>
                                    <View style={{ height: width * 0.135, width: width * 0.135, position: 'absolute', bottom: 0, right: 0, backgroundColor: "#008000", justifyContent: 'flex-end', alignItems: 'flex-end', borderTopLeftRadius: 100, paddingBottom: width * 0.008, paddingRight: width * 0.0135, borderTopColor: "white", borderLeftColor: "white", borderTopWidth: 3, borderLeftWidth: 3 }}>
                                        <Text style={{ color: 'white', fontWeight: 'bold' }} >500{"\n"}GM</Text>
                                    </View>

                                </View>
                            </View>
                            <View style={{ flex: 1.8, paddingLeft: width * 0.02, paddingVertical: height * 0.02 }}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text numberOfLines={2} style={{ fontSize: width * 0.037, fontWeight: "bold" }}>Amul Pasteurised Butter Amul Pasteurised Butter</Text>
                                </View>
                                <View style={{ flex: 2.5, flexDirection: 'row' }}>
                                    <View style={{ flex: 1.3 }}>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                                                <MaterialCommunityIcons name="brightness-percent" size={width * 0.042} color="orange" />
                                            </View>
                                            <View style={{ flex: 4, justifyContent: 'flex-end', alignItems: 'flex-start', paddingLeft: width * 0.01 }}>
                                                <Text style={{ fontWeight: 'bold', color: 'orange', fontSize: width * 0.03 }} >Buy 1 Get 1 Free</Text>

                                            </View>
                                        </View>
                                        <View style={{ flex: 1.8, justifyContent: 'center' }}>
                                            <Text style={{ textDecorationLine: "line-through", fontSize: width * 0.033, fontWeight: 'bold', color: 'gray' }}>MRP ₹155.20</Text>
                                            <Text style={{ fontSize: width * 0.043, fontWeight: 'bold', color: 'black' }}>₹150.00</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        {press ?
                                            <TouchableOpacity onPress={() => click()} style={{ height: height * 0.038, width: width * 0.23, backgroundColor: '#000080', borderRadius: 4, alignItems: "center", justifyContent: 'center' }}>
                                                <Text style={{ color: "white", fontSize: width * 0.04, fontWeight: "bold" }}>ADD</Text>
                                            </TouchableOpacity>
                                            :
                                            <View style={{ height: height * 0.038, width: width * 0.23, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <TouchableOpacity onPress={() => minus()} style={{ height: '100%', width: '30%', backgroundColor: '#000080', justifyContent: 'center', alignItems: "center", borderRadius: 4, elevation: 2 }}>
                                                    <Entypo name="minus" size={24} color="white" />
                                                </TouchableOpacity>
                                                <View style={{ height: '100%', width: '28%', backgroundColor: 'white', justifyContent: 'center', alignItems: "center", borderRadius: 4, elevation: 2 }}>
                                                    <Text style={{ fontWeight: "bold", fontSize: width * 0.04, color: "#000080" }}>{cart}</Text>
                                                </View>
                                                <TouchableOpacity onPress={() => add()} style={{ height: '100%', width: '30%', backgroundColor: '#000080', justifyContent: 'center', alignItems: "center", borderRadius: 4, elevation: 2 }}>
                                                    <Entypo name="plus" size={24} color="white" />
                                                </TouchableOpacity>

                                            </View>
                                        }
                                    </View>

                                </View>
                            </View>
                        </View>

                    )}
                    keyExtractor={(item, index) => item + index.toString()}
                />
            </View>
        </View>
    )
}

// #0000CD
// #8A2BE2
// #FF1493
// #8B4513
// #483D8B
// #000080
// #FF4500
// #800000
// #DC143C
// #FF4500




// 000080