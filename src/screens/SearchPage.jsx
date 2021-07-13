import React from 'react'
import { View, Dimensions, TouchableOpacity, TextInput,ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import CataAds from '../components/CataAds';
import ItemList from '../components/ItemList';
import * as constant from "../constants/ConstantData"
const { height, width } = Dimensions.get("window");

export default function SearchPage() {
    const itemListData = constant.Data.slice(0, 4);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: height * 0.1, backgroundColor: '#232b40', paddingHorizontal: width * 0.035 }}>
                <View style={{ flex: 1, justifyContent: 'center', paddingTop: height * 0.02 }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("SearchPage")} style={{ height: '85%', width: "100%", backgroundColor: 'white', flexDirection: 'row', borderRadius: 5 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="search-outline" size={width * 0.06} color="black" />
                        </View>
                        <View style={{ flex: 6, justifyContent: 'center' }}>
                            <TextInput placeholder="search 10000+Products" placeholderTextColor="black" />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="mic" size={width * 0.06} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: height * 0.01 }}></View>
            </View>
            <ScrollView style={{ flex: 1 }}>
                
                <View style={{ height:height*0.08}}></View>
                <View style={{ flex: 4, }}>
                    {/* <ItemList data={itemListData} />
                    <CataAds data={constant.CataAdsBeauty} /> */}
                </View>
            </ScrollView>
        </View>
    )
}
