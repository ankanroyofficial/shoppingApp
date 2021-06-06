import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image, } from 'react-native'
import { Brands } from '../constants/ConstantData';
const { height, width } = Dimensions.get("window");
export default function BrandAds(props) {
    const slide = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
    ]
    return (
        <View style={{ height: height * 0.27, backgroundColor: 'white' }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', paddingHorizontal: width * 0.035, paddingTop: height * 0.016 }}>
                <Text style={{ fontSize: width * 0.06, fontWeight: "bold", color: "black" }}>Top Brands</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("ProductList")}>
                    <Text style={{ fontSize: width * 0.0448, fontWeight: "bold", color: "#00BFFF" }}>View all</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {Brands.map((item, index) => (
                        <View key={index} style={{ height: height * 0.16, width: width * 0.6, marginLeft: width * 0.035, marginRight: index % (slide.length) - (slide.length - 1) == 0 ? width * 0.035 : 0, borderRadius: 5,overflow:'hidden' }}>
                            <Image source={{ uri: item.image }} style={{ height: "100%", width: "100%",resizeMode:"stretch" }} />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}
