import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");
export default function ToggleCatagory(props) {
    const [press, setPress] = useState(true)
    const click = () => {
        setPress(!press)
    }
    const Data = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        // { id: 11 }
    ]

    // console.log(props.data)

    return (
        <View style={{ flex: 1 }}>
            {
                press ?
                    <View style={{ backgroundColor: "white", elevation: 2, paddingVertical: width * 0.02, }}>
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {props.data.map((item, index) => (
                                index % (props.data.length) - (props.data.length - 1) == 0 ?
                                    <View key={index} style={{ width: width * 0.85, flexDirection: 'row' }} >
                                        <View style={{ width: width * 0.25, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ height: height * 0.08, width: height * 0.08, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: 'black' }}>
                                                <Image source={item.icon} style={{ height: "80%", width: '80%', resizeMode: "contain" }} />
                                            </View>
                                            <Text style={{ textAlign: 'center', paddingTop: height * 0.01, fontSize: width * 0.03, fontWeight: 'bold' }}>{item.title}</Text>
                                        </View>
                                        <View style={{ height: height * 0.145, width: width * 0.6, justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ height: "80%", width: "90%", backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, overflow: 'hidden', borderWidth: 1 }}>
                                                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_rdX17AreO2khCF5jSqx-09LZoyHd_E5aMyL8LIOnwPs13B2dTvlG6U5BftCKJAc-xo&usqp=CAU" }} style={{ height: "100%", width: '100%', resizeMode: "contain" }} />
                                            </View>
                                        </View>
                                    </View>
                                    :
                                    <View key={index} style={{ width: width * 0.25, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ height: height * 0.08, width: height * 0.08, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: 'black' }}>
                                            <Image source={item.icon} style={{ height: "80%", width: '80%', resizeMode: "contain" }} />
                                        </View>
                                        <Text style={{ textAlign: 'center', paddingTop: height * 0.01, fontSize: width * 0.03, fontWeight: 'bold' }}>{item.title}</Text>
                                    </View>
                            ))}
                        </ScrollView>
                        <TouchableOpacity activeOpacity={1} onPress={() => { click() }} style={{ height: height * 0.04, width: height * 0.045, borderRadius: (height * 0.1) / 2, justifyContent: 'center', alignItems: 'center', paddingTop: height * 0.008, backgroundColor: "white", elevation: 0.5, position: 'absolute', bottom: -height * 0.018, alignSelf: 'center', }}>
                            <FontAwesome5 name="chevron-down" size={width * 0.037} color="#232b40" />
                        </TouchableOpacity>
                    </View> :
                    <View style={{ width: width, elevation: 2, backgroundColor: "white", paddingVertical: width * 0.01 }}>
                        <FlatList
                            data={props.data}
                            numColumns={4}
                            renderItem={({ item, index }) => (
                                index % (props.data.length) - (props.data.length - 1) == 0 ?
                                    <>
                                        <View key={index} style={{ width: width * 0.25, height: width * 0.29, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'white' }}>
                                            <View style={{ height: height * 0.08, width: height * 0.08, justifyContent: 'center', alignItems: "center", borderWidth: 0.5, borderColor: 'black' }}>
                                                <Image source={item.icon} style={{ height: "80%", width: '80%', resizeMode: "contain" }} />

                                            </View>
                                            <Text style={{ textAlign: 'center', fontSize: width * 0.03, fontWeight: 'bold' }}>{item.title}</Text>
                                        </View>
                                        <View style={{ height: width * 0.29, width: props.data.length % 4 == 1 ? width * 0.75 : props.data.length % 4 == 2 ? width * 0.5 : 0, justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ height: "80%", width: "90%", backgroundColor: 'white', borderRadius: 10, overflow: 'hidden', borderWidth: props.data.length % 4 == 1 ? 1 : props.data.length % 4 == 2 ? 1 : 0 }}>
                                                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_rdX17AreO2khCF5jSqx-09LZoyHd_E5aMyL8LIOnwPs13B2dTvlG6U5BftCKJAc-xo&usqp=CAU" }} style={{ height: "100%", width: '100%', resizeMode: "contain" }} />
                                            </View>
                                        </View>
                                    </>
                                    :
                                    <View key={index} style={{ width: width * 0.25, height: width * 0.29, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'white' }}>
                                        <View style={{ height: height * 0.08, width: height * 0.08, justifyContent: 'center', alignItems: "center", borderWidth: 0.5, borderColor: 'black' }}>
                                            <Image source={item.icon} style={{ height: "80%", width: '80%', resizeMode: "contain" }} />
                                        </View>
                                        <Text style={{ textAlign: 'center', fontSize: width * 0.03, fontWeight: 'bold' }}>{item.title}</Text>
                                    </View>
                            )}
                        />
                        <TouchableOpacity activeOpacity={1} onPress={() => { click() }} style={{ height: height * 0.04, width: height * 0.045, backgroundColor: 'pink', borderRadius: (height * 0.5) / 2, justifyContent: 'center', alignItems: 'center', paddingTop: height * 0.008, backgroundColor: "white", elevation: 0.5, position: 'absolute', bottom: -height * 0.02, alignSelf: 'center', }}>
                            <FontAwesome5 name="chevron-up" size={width * 0.037} color="#232b40" />
                        </TouchableOpacity>
                    </View>
            }
        </View>
    )
}
