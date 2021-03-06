import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native'
import { CataAdsBeauty } from '../constants/ConstantData';
const { height, width } = Dimensions.get("window");

export default function CataAds(props) {

    return (
        <View style={{ height: height * 0.85, backgroundColor: 'white' }}>
            <View style={{ height: '80%', backgroundColor: 'gray',opacity:0.1,borderTopLeftRadius:25,borderTopRightRadius:25}}></View>
            <View style={{ height: "100%", width: "100%", position: 'absolute', }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', paddingHorizontal: width * 0.035, paddingVertical: height * 0.016 }}>
                    <Text style={{ fontSize: width * 0.06, fontWeight: "bold", color: "black" }}>{CataAdsBeauty.title}</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("ProductList")}>
                        <Text style={{ fontSize: width * 0.0448, fontWeight: "bold", color: "#00BFFF" }}>View all</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <View style={{ height: width * 0.93, width: width * 0.93, alignSelf: 'center', borderRadius: 5, overflow: 'hidden', elevation: 1 ,backgroundColor:'white'}}>
                        <View style={{flex:1}}>
                            <FlatList
                                numColumns={2}
                                data={props.data.product}
                                renderItem={({ item, index }) => (
                                    <View key={index} style={{ height: width * 0.465, width: width * 0.465,borderRightColor:"gray",borderRightWidth:0.3,borderBottomColor:'gray',borderBottomWidth:0.3}}>
                                        <View style={{ flex: 4,justifyContent:'center',alignItems:'center' }}>
                                            <Image source={{ uri: item.image }} style={{ height: "80%", width: "80%", resizeMode: 'contain' }} />
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{  fontSize: width * 0.037 }}>{item.name}</Text>
                                            {/* <Text style={{ fontWeight: 'bold', fontSize: width * 0.037 }}>{index%2}</Text> */}
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                    <View style={{ height: height * 0.22, marginHorizontal: width * 0.035, borderWidth: 5, borderColor: 'white', elevation: 2 }}>
                        <Image source={{ uri:CataAdsBeauty.adsBanner  }} style={{ height: "100%", width: "100%", resizeMode: 'stretch' }} />
                    </View>
                </View>
            </View>
        </View>
    )
}


