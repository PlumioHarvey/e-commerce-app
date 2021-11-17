import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

const productDetails = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons name="chevron-back-outline" size={32} color="#008b8b" onPress={()=> {navigation.navigate("Home")}} />
                <Ionicons name="menu-outline" size={32} color="#008b8b" onPress={()=> {navigation.navigate("")}}/>
            </View>

            <View style={styles.cartHeader}>
                <Text style={styles.cartText}>Product Details</Text>
            </View>

            <ScrollView style={styles.itemsCOntainer} >
                <View style={styles.product}>
                    <View style={styles.productImg}>
                     
                    </View>
                </View>
                <View style={styles.productInfo}>
                    <View style={styles.productName}>
                        <Text style={styles.nameText}>sofa</Text>
                    </View>
                    <View style={styles.productDetails}>
                        <Text style={styles.pdText}>Modern furniture design features sleek, straight lines with smooth and shiny surfaces. The focus is on simple geometric shapes rather than heavy ornamentation. The objective is to create an uncluttered look, free from chaotic lines and color schemes.</Text>
                    </View>
                    <View style={styles.location} >
                        <View style={styles.left} >
                            <Text>Palm Street ave</Text>
                            <Text>17-001, Accra</Text>
                        </View>
                        <View style={styles.right} >
                        <Ionicons name="chevron-forward-outline" size={32} color="#00ced1" onPress={()=> {navigation.navigate("")}} />
                        </View>
                    </View>
                    <View style={styles.price} >
                        <Text style={styles.info}>GHC 28.99</Text>
                    </View>
                    <TouchableOpacity style={styles.addToCart}  onPress={()=> {navigation.navigate("cart")}}>
                        <Text style={styles.addText}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}

export default productDetails

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#6495ed",
        justifyContent: "center",
        alignItems: 'center',
    },
    img:{
        width: "108%",
        height: 260,
        marginTop: -60,
        
    },
    iconContainer:{
        width: "90%",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 50,
    },

    cartHeader:{},
    cartText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#deb887',
    },

    
    itemsCOntainer: {
        width: '100%',
        paddingVertical:10,
        marginTop: 10,
        
    },

    product:{
        width: "100%",
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
        
    },
    productImg:{
        width: "90%",
        height: 260,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#deb887',
    },
    productInfo:{
        padding: 20,
    },
    nameText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#f5f5dc',
    },
    productName:{
        marginBottom: 10,
    },
    pdText:{
        lineHeight: 23,
    },
    productDetails:{},
    location:{
        width: '100%',
        height: 70,
        marginTop: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor:  '#00ffff',
        borderBottomWidth: 2,
        // backgroundColor: "#d2691e",
    },
    price:{
        paddingVertical: 10,
    },
    info:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#f0ffff',
    },
    addToCart:{
        width: '100%',
        backgroundColor: "#ffe4c4",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10,
        borderRadius: 50,
    },
    addText:{
        color: "#fff",
        padding: 20,
    },
})