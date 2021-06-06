import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, Modal } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import OtherInformation from '../components/OtherInformation';
import DescriptionProduct from '../components/DescriptionProduct';
import ProductInfortion from '../components/ProductInfortion';

const { height, width } = Dimensions.get("window");
export default function ProductPage(props) {

    const [press, setPress] = useState(true)
    const [cart, setCart] = useState(0)
    const [topTab, setTopTab] = useState(0)

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

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            backdropOpacity={0.3}
        >
            <View style={{ flex: 1 }}>
                <TouchableOpacity activeOpacity={1} onPress={() => props.setVisible(false)} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', }}></TouchableOpacity>
                <View style={{ flex: 1.4, backgroundColor: 'white' }}>
                    <View style={{ height: height * 0.055, backgroundColor: '#f5f5f5' }}></View>
                    <View style={{ height: height * 0.26, width: width * 0.43, backgroundColor: 'white', position: 'absolute', alignSelf: 'center', top: -height * 0.23, borderRadius: 4, borderColor: 'green', borderWidth: 2, overflow: 'hidden' }}>
                        <Image source={require('../assets/image/butter.jpeg')} style={{ resizeMode: 'contain', height: "100%", width: "100%" }} />
                        <View style={{ height: height * 0.023, width: height * 0.023, position: 'absolute', bottom: 5, left: 5, borderWidth: 1, borderColor: "green", justifyContent: 'center', alignItems: 'center' }}>
                            <Octicons name="primitive-dot" size={26} color="green" />
                        </View>
                        <View style={{ height: height * 0.08, width: height * 0.08, backgroundColor: 'green', position: 'absolute', bottom: 0, right: 0, borderTopStartRadius: 100, justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: width * 0.02, paddingBottom: width * 0.02, }}>
                            <Text style={{ fontSize: width * 0.04, fontWeight: 'bold', color: 'white' }}>500 {"\n"} GM</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 0.8, flexDirection: 'row' }}>
                            <View style={{ flex: 1.7, justifyContent: 'space-evenly', paddingLeft: width * 0.05, }}>

                                <Text numberOfLines={2} style={{ fontSize: width * 0.038, fontWeight: 'bold', color: 'gray' }}>Amul Pasteurised Butter</Text>
                                <Text style={{ fontSize: width * 0.038, fontWeight: 'bold', color: 'gray' }}>500 gm</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: width * 0.043, fontWeight: 'bold', color: 'red' }}>₹150.00</Text>
                                    <Text style={{ textDecorationLine: "line-through", paddingLeft: width * 0.02, fontSize: width * 0.033, fontWeight: 'bold', color: 'gray' }}>MRP ₹155.20</Text>
                                </View>
                                <Text style={{ fontSize: width * 0.042, fontWeight: 'bold', color: 'green' }}>Fabsta</Text>
                                <View style={{ height: "18%", width: "70%", borderTopRightRadius: 100, borderBottomLeftRadius: 100, justifyContent: "center", alignItems: 'center', backgroundColor: 'orange',paddingHorizontal:width*0.025 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white',textAlign:"center" }} >Buy 1 Get 1 Free</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                {press ?
                                    <TouchableOpacity onPress={() => click()} style={{ height: height * 0.038, width: width * 0.27, backgroundColor: '#000080', borderRadius: 4, justifyContent: "center", alignItems: "center", }}>
                                        <Text style={{ color: "white", fontSize: width * 0.04, fontWeight: "bold" }}>ADD</Text>
                                    </TouchableOpacity>
                                    :
                                    <View style={{ height: height * 0.038, width: width * 0.27, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <TouchableOpacity onPress={() => minus()} style={{ height: '100%', width: '30%', backgroundColor: '#000080', justifyContent: 'center', alignItems: "center", borderRadius: 4, elevation: 2 }}>
                                            <Entypo name="minus" size={24} color="white" />
                                        </TouchableOpacity>
                                        <View style={{ height: '100%', width: '28%', backgroundColor: 'white', justifyContent: 'center', alignItems: "center", borderRadius: 4, elevation: 2 }}>
                                            <Text style={{ fontWeight: "bold", fontSize: width * 0.04 ,color:"#000080"}}>{cart}</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => add()} style={{ height: '100%', width: '30%', backgroundColor: '#000080', justifyContent: 'center', alignItems: "center", borderRadius: 4, elevation: 2 }}>
                                            <Entypo name="plus" size={24} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ height: height * 0.05, flexDirection: 'row', backgroundColor: '#f5f5f5' }}>
                                <TouchableOpacity onPress={() => setTopTab(0)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: "green", borderBottomWidth: topTab == 0 ? 3 : 0 }}>
                                    <Text style={{ fontSize: width * 0.037, color: topTab == 0 ? 'black' : "gray", fontWeight: 'bold' }}>Other information</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setTopTab(1)} style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center', borderBottomColor: "green", borderBottomWidth: topTab == 1 ? 3 : 0 }}>
                                    <Text style={{ fontSize: width * 0.037, color: topTab == 1 ? 'black' : "gray", fontWeight: 'bold' }}>Description</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setTopTab(2)} style={{ flex: 1.2, justifyContent: 'center', alignItems: 'center', borderBottomColor: "green", borderBottomWidth: topTab == 2 ? 3 : 0 }}>
                                    <Text style={{ fontSize: width * 0.037, color: topTab == 2 ? 'black' : "gray", fontWeight: 'bold' }}>Product information</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, }}>
                                {topTab == 0 ? <OtherInformation /> : topTab == 1 ? <DescriptionProduct /> : <ProductInfortion />}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

