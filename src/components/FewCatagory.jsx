import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native'

const { height, width } = Dimensions.get("window");

export default function FewCatagory(props) {
    // console.log(props.data)
    return (
        <View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', paddingHorizontal: width * 0.035, paddingVertical: height * 0.016 }}>
                <Text style={{ fontSize: width * 0.06, fontWeight: "bold", color: "black" }}>{props.title}</Text>
                {/* <TouchableOpacity onPress={() => props.navigation.navigate("ProductList")}> 
                    <Text style={{ fontSize: width * 0.0448, fontWeight: "bold", color: "#00BFFF" }}>View all</Text>
                </TouchableOpacity> */}
            </View>
            <View style={{ paddingHorizontal: width * 0.023333333, paddingBottom: width * 0.023333333 }}>
                <FlatList
                    data={props.data}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity activeOpacity={1} style={{ height: width * 0.43, width: width * 0.43, backgroundColor: 'white', borderRadius: 5, elevation: 2, borderColor: "#C0C0C0", borderWidth: 0.1, margin: width * 0.023333333 }}>
                            <View style={{ flex: 4.5, }}>
                                <Image source={{ uri: item.image }} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: width * 0.04,fontWeight:'bold' }}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => item + index.toString()}
                />
            </View>

        </View>
    )
}
