import React, { useState } from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image, Modal, Button } from 'react-native'
const { height, width } = Dimensions.get("window");
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import ProductPage from '../screens/ProductPage';

export default function ItemList(props) {
    const [press, setPress] = useState(true)
    const [cart, setCart] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);
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
    const slide = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },

    ]
    return (
        <View style={{ height: height * 0.5 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', paddingHorizontal: width * 0.035, paddingVertical: height * 0.016 }}>
                <Text style={{ fontSize: width * 0.06, fontWeight: "bold" }}>Buy & get Free</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("ProductList")}>
                    <Text style={{ fontSize: width * 0.0448, fontWeight: "bold", color: "#00BFFF" }}>View all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {props.data.map((item, index) => (
                    <View key={index} style={{ height: height * 0.375, backgroundColor: "white", width: width * 0.49, marginLeft: width * 0.035, marginRight: index % (props.data.length) - (props.data.length - 1) == 0 ? width * 0.035 : 0, borderRadius: 4, borderColor: "#C0C0C0", borderWidth: 0.8 }}>

                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/image/butter.jpeg')} style={{ resizeMode: 'contain', height: "100%", width: "100%" }} />
                            <View style={{ height: height * 0.023, width: height * 0.023, position: 'absolute', bottom: 5, right: 5, borderWidth: 1, borderColor: "green", justifyContent: 'center', alignItems: 'center' }}>
                                <Octicons name="primitive-dot" size={width*0.057} color="green" />
                            </View>

                        </View>
                        <TouchableOpacity onPress={() => { setModalVisible(true) }} style={{ flex: 1, paddingHorizontal: width * 0.03 }}>

                            <View style={{ flex: 1, paddingTop: height * 0.01 }}>
                                <Text numberOfLines={2} style={{ fontWeight: 'bold' }}>Amul Pasteurised Butter 500GM </Text>
                            </View>
                            <View style={{ flex: 0.5, flexDirection: 'row' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <MaterialCommunityIcons name="brightness-percent" size={20} color="orange" />
                                </View>
                                <View style={{ flex: 4, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: width * 0.01 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'orange' }} >Buy 1 Get 1 Free</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, paddingBottom: height * 0.01, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: width * 0.043, fontWeight: 'bold' }}>₹150.00</Text>
                                <Text style={{ textDecorationLine: "line-through", paddingLeft: width * 0.02, fontSize: width * 0.033, fontWeight: 'bold', color: 'gray' }}>MRP ₹155.20</Text>
                            </View>
                        </TouchableOpacity>

                        {press ?
                            <TouchableOpacity onPress={() => click()} style={{ height: height * 0.038, width: width * 0.27, backgroundColor: '#000080', position: 'absolute', bottom: -height * 0.019, borderRadius: 4, justifyContent: 'space-evenly', alignItems: "center", flexDirection: "row", alignSelf: 'center' }}>
                                <Text style={{ color: "white", fontSize: width * 0.04, fontWeight: "bold" }}>ADD</Text>
                            </TouchableOpacity>
                            :
                            <View style={{ height: height * 0.038, width: width * 0.27, position: 'absolute', bottom: -height * 0.019, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                                <TouchableOpacity onPress={() => minus()} style={{ height: '100%', width: '30%', backgroundColor: '#000080', justifyContent: 'center', alignItems: "center", borderRadius: 4, elevation: 2 }}>
                                    <Entypo name="minus" size={24} color="white" />
                                </TouchableOpacity>
                                <View style={{ height: '100%', width: '28%', backgroundColor: 'white', justifyContent: 'center', alignItems: "center", borderRadius: 4, elevation: 2 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: width * 0.04,color:"#000080" }}>{cart}</Text>
                                </View>
                                <TouchableOpacity onPress={() => add()} style={{ height: '100%', width: '30%', backgroundColor: '#000080', justifyContent: 'center', alignItems: "center", borderRadius: 4, elevation: 2 }}>
                                    <Entypo name="plus" size={24} color="white" />
                                </TouchableOpacity>

                            </View>

                        }
                    </View>
                ))}
            </ScrollView>
            <ProductPage setVisible={setModalVisible} visible={modalVisible} />
        </View>
    )
}
