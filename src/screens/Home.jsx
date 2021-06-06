import React from 'react'
import { View, Text, StatusBar, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import TopHeader from '../components/TopHeader';
import ToggleCatagory from '../components/ToggleCatagory';
import TopHomeAdvertise from '../components/TopHomeAdvertise';
import ItemList from '../components/ItemList';
import CataAds from '../components/CataAds';
import FewCatagory from '../components/FewCatagory';
import BrandAds from '../components/BrandAds';
import * as constant from "../constants/ConstantData"
const { height, width } = Dimensions.get("window");

export default function Home({ navigation }) {

 const itemListData = constant.Data.slice(0, 4);
    return (
        // #232b40
        <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
            <StatusBar backgroundColor={"#232b40"} />
            <TopHeader navigation={navigation} />
            <ScrollView style={{ flex: 1 }}>
                <ToggleCatagory data={constant.toggleCatagory} />
                <TopHomeAdvertise />
                <ItemList navigation={navigation} data={itemListData} />
                {/* <CataAds navigation={navigation} ads="https://i.pinimg.com/originals/f9/98/86/f99886a97ba4e7b0aa4d8b33e00b060c.jpg" /> */}
                <FewCatagory navigation={navigation} data={constant.FewcatagoryMilkBakery} title={"Dairy,Bakery & Cookies"} />
                <BrandAds navigation={navigation} />
                <CataAds navigation={navigation} data={constant.CataAdsBeauty} />
                {/* <ItemList navigation={navigation} /> */}
            </ScrollView>
        </View >
    )
}
