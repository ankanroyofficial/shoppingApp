import React, { useState } from 'react'
import { View, Text, StatusBar, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");
export default function LoginPage({ navigation }) {
    const [click, setClick] = useState(0)
    const [logineye, setLogineye] = useState(false)
    const [registereye, setRegistereye] = useState(false)
    const [registerName, setRegisterName] = useState("")
    const [loginEmail, setloginEmail] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")


    const registerButton = () => {
        registerPassword.length < 8 ? setClick(1) : setClick(0) || setRegisterPassword("")
    }

    // console.log(registerPassword.length)
    return (
        <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <View style={{ flex: 0.8, justifyContent: "center", alignItems: 'center' }}>
                <Image source={require("../assets/image/logo.png")} style={{ height: "100%", width: "100%", resizeMode: 'contain' }} />
            </View>
            <View style={{ height: height * 0.045, flexDirection: 'row', paddingHorizontal: width * 0.03 }}>
                <TouchableOpacity onPress={() => { setClick(0) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#232b40', borderBottomWidth: click == 0 ? 3 : 0 }}>
                    <Text style={{ fontSize: width * 0.052, fontWeight: 'bold', color: '#232b40' }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setClick(1) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#232b40', borderBottomWidth: click == 1 ? 3 : 0 }}>
                    <Text style={{ fontSize: width * 0.052, fontWeight: 'bold', color: '#232b40' }}>SignUp</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1.8 }}>
                {
                    click == 0 ?
                        <>
                            <View style={{ height: height * 0.085, justifyContent: 'center', alignItems: 'center', marginTop: height * 0.02 }}>
                                <Image source={require("../assets/image/Welcome.png")} style={{ height: "100%", width: "100%", resizeMode: 'contain' }} />
                            </View>
                            <View style={{ flex: 1.6 }}>
                                <View style={{ paddingVertical: height * 0.03, }}>
                                    <View style={{ padding: width * 0.03, backgroundColor: 'white', marginHorizontal: width * 0.09, elevation: 3, borderRadius: 4 }}>
                                        <TextInput keyboardType="email-address" style={{}} placeholder="Email" placeholderTextColor="gray" value={loginEmail} onChangeText={(e) => setloginEmail(e)} />
                                    </View>
                                    <View style={{ padding: width * 0.03, backgroundColor: 'white', marginHorizontal: width * 0.09, flexDirection: 'row', marginTop: height * 0.02, elevation: 3, borderRadius: 4 }}>
                                        <View style={{ flex: 5 }}>
                                            <TextInput secureTextEntry={logineye == true ? false : true} style={{}} placeholder="Password" placeholderTextColor="gray" value={loginPassword} onChangeText={(e) => setLoginPassword(e)} />
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => setLogineye(!logineye)}><FontAwesome5 name={logineye == true ? "eye-slash" : "eye"} size={width * 0.045} color="gray" /></TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ paddingVertical: height * 0.03 }}>
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.replace("Home")} style={{ padding: width * 0.035, marginHorizontal: width * 0.09, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#232b40', elevation: 3, borderRadius: 4 }}>
                                        <Text style={{ color: "white", fontWeight: 'bold', fontSize: width * 0.037 }}>LOGIN</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: width * 0.04, alignSelf: 'center', marginVertical: height * 0.04, color: '#232b40', fontWeight: 'bold' }}>Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </> :
                        <>
                            <View style={{ height: height * 0.085, justifyContent: 'center', alignItems: 'center', marginTop: height * 0.02 }}>
                                <Image source={require("../assets/image/Register.png")} style={{ height: "100%", width: "100%", resizeMode: 'contain' }} />
                            </View>
                            <View style={{ flex: 1.6 }}>
                                <View style={{ paddingVertical: height * 0.03, }}>
                                    <View style={{ padding: width * 0.03, backgroundColor: 'white', marginHorizontal: width * 0.09, elevation: 3, borderRadius: 4 }}>
                                        <TextInput placeholder="Name" placeholderTextColor="gray" value={registerName} onChangeText={(e) => setRegisterName(e)} />
                                    </View>
                                    <View style={{ padding: width * 0.03, backgroundColor: 'white', marginHorizontal: width * 0.09, elevation: 3, marginVertical: height * 0.015, borderRadius: 4 }}>
                                        <TextInput keyboardType="email-address" placeholder="Email" placeholderTextColor="gray" value={registerEmail} onChangeText={(e) => setRegisterEmail(e)} />
                                    </View>
                                    <View style={{ padding: width * 0.03, backgroundColor: 'white', marginHorizontal: width * 0.09, flexDirection: 'row', elevation: 3, borderRadius: 4 }}>
                                        <View style={{ flex: 5 }}>
                                            <TextInput secureTextEntry={registereye == true ? false : true} style={{}} placeholder="Password" placeholderTextColor="gray" value={registerPassword} onChangeText={(e) => setRegisterPassword(e)} />
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => setRegistereye(!registereye)}><FontAwesome5 name={registereye == true ? "eye-slash" : "eye"} size={width * 0.045} color="gray" /></TouchableOpacity>
                                        </View>
                                    </View>
                                    {
                                        registerPassword.length < 8 && registerPassword.length !=0 && <View style={{ marginHorizontal: width * 0.09, alignItems: 'flex-end' }}>
                                            <Text style={{ color: "red", letterSpacing: 1 }}>minimum 8 letters</Text>
                                        </View>
                                    }

                                </View>
                                <View style={{ paddingVertical: height * 0.03 }}>
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => registerButton()} style={{ padding: width * 0.035, marginHorizontal: width * 0.09, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#232b40', elevation: 3, borderRadius: 4 }}>
                                        <Text style={{ color: "white", fontWeight: 'bold', fontSize: width * 0.037 }}>Register</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </>
                }


            </View>




        </View>
    )
}








