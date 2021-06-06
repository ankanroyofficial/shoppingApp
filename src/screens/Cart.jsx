import React, { useRef, useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, FlatList, StyleSheet, ScrollView } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const { height, width } = Dimensions.get("window");
export default function Cart({ navigation }) {
    const [press, setPress] = useState(true)
    const [priceDetails, setPriceDetails] = useState(false)
    const [cart, setCart] = useState(0)
    const scrollViewRef = useRef();

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
    const Data = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
    ]
    return (
        <View style={{ flex: 1 }}>

            <View style={{ height: height * 0.077, backgroundColor: '#232b40', flexDirection: 'row' }}>
                <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', paddingLeft: width * 0.01 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-left" size={width * 0.07} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, justifyContent: 'center', paddingLeft: width * 0.025 }}>
                    <Text style={{ fontSize: width * 0.048, fontWeight: 'bold', color: 'white' }}>Cart</Text>
                </View>
                <View style={{ flex: 1, }}>

                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                >
                    {Data.map((item, index) => (
                        <View key={index} style={{ height: height * 0.18, flexDirection: 'row', backgroundColor: 'white', marginBottom: height * 0.01 }}>
                            <View style={{ justifyContent: 'center' }}>
                                <View style={{ height: height * 0.15, width: height * 0.15, backgroundColor: 'white', flexDirection: 'row' }}>
                                    <View style={{ flex: 2.9 }}>
                                        <Image source={require("../assets/image/butter.jpeg")} style={{ height: "100%", width: '100%', resizeMode: 'center' }} />
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: '#FF4500', justifyContent: 'center', alignItems: "center", paddingBottom: height * 0.08 }}>
                                        <Text style={{ color: "white", transform: [{ rotate: '270deg' }], fontSize: width * 0.026, fontWeight: "bold", letterSpacing: 0.5, width: height * 0.1 }}>Amul Butter</Text>
                                    </View>
                                    <View style={{ height: height * 0.015, width: height * 0.015, position: 'absolute', bottom: 5, left: 5, borderWidth: 1, borderColor: "green", justifyContent: 'center', alignItems: 'center' }}>
                                        <Octicons name="primitive-dot" size={width * 0.032} color="green" />
                                    </View>
                                    <View style={{ height: width * 0.12, width: width * 0.12, position: 'absolute', bottom: 0, right: 0, backgroundColor: "#008000", justifyContent: 'flex-end', alignItems: 'flex-end', borderTopLeftRadius: 100, paddingBottom: width * 0.008, paddingRight: width * 0.0135, borderTopColor: "white", borderLeftColor: "white", borderTopWidth: 3, borderLeftWidth: 3 }}>
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: width * 0.03 }} >500{"\n"}GM</Text>
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
                    ))}
                    {
                        priceDetails == true ?
                            <View style={{ height: height * 0.33, backgroundColor: 'white' }}>
                                <View style={{ flex: 2, justifyContent: 'center', marginLeft: height * 0.01, borderBottomColor: 'gray', borderBottomWidth: 1, }}>
                                    <Text style={{ fontSize: 20, color: 'gray', fontStyle: 'italic' }}>PRICE DETAILS</Text>
                                </View>
                                <View style={{ flex: 5, marginHorizontal: height * 0.01 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={style.textStyle}>Price ({Data.length} items)</Text>
                                        <Text style={style.textStyle}>₹ 1500</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={style.textStyle}>Discount</Text>
                                        <Text style={style.textStyle}>-₹ 280</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={style.textStyle}>Delivery Charges</Text>
                                        <Text style={style.textStyle}>₹ 50</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: height * 0.01, borderBottomColor: 'gray', borderTopColor: 'gray', borderTopWidth: 1, borderBottomWidth: 1, alignItems: 'center' }}>
                                    <Text style={style.textStyle}>Total Price</Text>
                                    <Text style={style.textStyle}>₹ 1270</Text>
                                </View>
                                <View style={{ flex: 2, marginHorizontal: height * 0.01, justifyContent: "flex-start" }}>
                                    <Text style={style.textStyle2}>You will save ₹280 on this order </Text>
                                </View>
                            </View> :
                            null
                    }

                </ScrollView>
            </View>
            <View style={{ height: height * 0.08, flexDirection: 'row', backgroundColor: '#232b40', }}>
                <TouchableOpacity onPress={() => setPriceDetails(!priceDetails)} style={{ flex: 3 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: width * 0.05, color: 'white', paddingLeft: width * 0.04, paddingTop: width * 0.01 }}> ₹455</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: width * 0.032, color: 'white', paddingLeft: width * 0.06 }}>View price details</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{ flex: 2, backgroundColor: 'white', margin: width * 0.03, justifyContent: 'center', alignItems: 'center', elevation: 15 }}>
                    <Text style={{ fontWeight: '700', fontSize: width * 0.04, color: '#232b40' }}>Place Order</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    textStyle: { fontSize: width * 0.036, fontWeight: 'bold' },
    textStyle2: { fontSize: 15, fontWeight: '700', color: '#000080', fontStyle: 'italic' }
})

// 000080
// 3985FF