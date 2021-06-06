import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import Carousel from "react-native-carousel"
import { AdsSlide } from '../constants/ConstantData';

const { height, width } = Dimensions.get("window");
export default function TopHomeAdvertise() {

    return (
        <View style={{ height: height * 0.54, backgroundColor: "#e6e6e6", justifyContent: 'space-between', paddingVertical: height * 0.02 }}>
            <View style={{ height: height * 0.185, alignItems: 'center' }}>
                <View style={{ height: "100%", width: "90%" }}>
                    <Carousel
                        hideIndicators={true}
                        animate={true}
                        delay={4000}
                        loop={true}
                    >
                        {AdsSlide.map((item, index) => (
                            <View key={index} style={{ flex: 1, marginHorizontal: width * 0.01, borderRadius: 3, overflow: 'hidden' }}>
                                <Image source={{ uri: item.image }} style={{ height: "100%", width: "100%", resizeMode: "stretch" }} />
                            </View>
                        ))}
                    </Carousel>
                </View>
            </View>
            <View style={{ height: height * 0.08, backgroundColor: '#1E90FF', marginHorizontal: width * 0.035, borderRadius: 4, justifyContent: 'center', }}>
                <Text style={{ color: "white", alignSelf: 'center', fontSize: width * 0.075, fontWeight: 'bold', letterSpacing: 1 }}>Stay Home Stay Safe.</Text>
            </View>
            <View style={{ height: height * 0.2, marginHorizontal: width * 0.035, flexDirection: "row", justifyContent: 'space-between' }}>
                <View style={{ height: "100%", width: '32%', backgroundColor: 'white', borderRadius: 3, borderWidth: 0.7, borderColor: '#1E90FF', overflow: 'hidden' }}>
                    <Image source={require("../assets/image/mask.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                </View>
                <View style={{ height: "100%", width: '32%', backgroundColor: 'white', borderRadius: 3, borderWidth: 0.7, borderColor: '#1E90FF', overflow: 'hidden' }}>
                    <Image source={require("../assets/image/hand.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                </View>
                <View style={{ height: "100%", width: '32%', backgroundColor: "white", borderRadius: 3, borderWidth: 0.7, borderColor: '#1E90FF', overflow: 'hidden' }}>
                    <Image source={require("../assets/image/social.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                </View>
            </View>
        </View>
    )
}
