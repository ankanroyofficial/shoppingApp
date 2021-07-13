import React from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window")
export default function DrawerPage(props) {
    const Data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }} >
            <View style={{ height: "30%", backgroundColor: "#232b40", justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ width: width * 0.21, height: width * 0.21, backgroundColor: "white", borderRadius: (width * 0.27) / 2, overflow: 'hidden' }}>
                    <Image source={{ uri: "https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png" }} style={{ height: "100%", width: "100%", resizeMode: "center" }} />
                </View>
                <View>
                    <Text style={{ fontSize: width * 0.056, color: 'white', fontWeight: 'bold', alignSelf: "center",paddingBottom:height*0.01 }} >Ankan Roy</Text>
                    <Text style={{ fontSize: width * 0.045, color: 'white', fontWeight: 'bold', alignSelf: "center" }} >ankanofficial018@gmail.com</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{ height: height * 0.065, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="home-outline" size={width * 0.05} color="#232b40" />
                        </View>
                        <View style={{ flex: 3, justifyContent: 'center' }}>
                            <Text style={{ fontSize: width * 0.043, }}>Home</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("CatagoryPage")} style={{ height: height * 0.065, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="home-outline" size={width * 0.05} color="#232b40" />
                        </View>
                        <View style={{ flex: 3, justifyContent: 'center' }}>
                            <Text style={{ fontSize: width * 0.043, }}>Catagory</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Cart")} style={{ height: height * 0.065, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="cart-outline" size={width * 0.05} color="#232b40" />
                        </View>
                        <View style={{ flex: 3, justifyContent: 'center' }}>
                            <Text style={{ fontSize: width * 0.043, }}>Cart</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: height * 0.065, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Octicons name="package" size={width * 0.05} color="#232b40" />

                        </View>
                        <View style={{ flex: 3, justifyContent: 'center' }}>
                            <Text style={{ fontSize: width * 0.043, }}>Order</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("ProfilePage")} style={{ height: height * 0.065, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="account-box-outline" size={width * 0.06} color="#232b40" />
                        </View>
                        <View style={{ flex: 3, justifyContent: 'center' }}>
                            <Text style={{ fontSize: width * 0.043, }}>Profile</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: height * 0.065, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                            <Ionicons name="book-outline" size={width * 0.05} color="#232b40" />
                        </View>
                        <View style={{ flex: 3, justifyContent: 'center' }}>
                            <Text style={{ fontSize: width * 0.043, }}>About Us</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <TouchableOpacity style={{ height: height * 0.065, borderTopColor: "#C0C0C0", borderTopWidth: 1, justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Entypo name="log-out" size={width * 0.05} color="#232b40" />
                </View>
                <View style={{ flex: 5, justifyContent: 'center' }}>
                    <Text style={{ fontSize: width * 0.039 }}>Signout</Text>

                </View>
            </TouchableOpacity>
        </View>
    )
}
