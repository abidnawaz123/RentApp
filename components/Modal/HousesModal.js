import React, { useEffect, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { image } from "../shared/images";
import { color } from "../shared/colors";
import Icon from "react-native-vector-icons/FontAwesome5"
import AntDesign from "react-native-vector-icons/AntDesign"

function HousesModal({ modal, setModal }) {

    const toggleModal = () => {
        setModal(!modal)
    };
    const list = [
        {
            house: image.house1,
            houseName: "Orchad House",
            yearlyHouseRent: "2500.000.000",
            bedRooms: 6,
            bathRooms: 4
        },
        {
            house: image.house2,
            houseName: "The Hollies House",
            yearlyHouseRent: "2000.000.000",
            bedRooms: 5,
            bathRooms: 3
        },
        {
            house: image.house3,
            houseName: "Sea Breezes House",
            yearlyHouseRent: "1750.000.000",
            bedRooms: 5,
            bathRooms: 2
        },{
            house: image.house1,
            houseName: "Orchad House",
            yearlyHouseRent: "2500.000.000",
            bedRooms: 6,
            bathRooms: 4
        },
        {
            house: image.house2,
            houseName: "The Hollies House",
            yearlyHouseRent: "2000.000.000",
            bedRooms: 5,
            bathRooms: 3
        },
        {
            house: image.house3,
            houseName: "Sea Breezes House",
            yearlyHouseRent: "1750.000.000",
            bedRooms: 5,
            bathRooms: 2
        },{
            house: image.house1,
            houseName: "Orchad House",
            yearlyHouseRent: "2500.000.000",
            bedRooms: 6,
            bathRooms: 4
        },
        {
            house: image.house2,
            houseName: "The Hollies House",
            yearlyHouseRent: "2000.000.000",
            bedRooms: 5,
            bathRooms: 3
        },
        {
            house: image.house3,
            houseName: "Sea Breezes House",
            yearlyHouseRent: "1750.000.000",
            bedRooms: 5,
            bathRooms: 2
        },{
            house: image.house1,
            houseName: "Orchad House",
            yearlyHouseRent: "2500.000.000",
            bedRooms: 6,
            bathRooms: 4
        },
        {
            house: image.house2,
            houseName: "The Hollies House",
            yearlyHouseRent: "2000.000.000",
            bedRooms: 5,
            bathRooms: 3
        },
        {
            house: image.house3,
            houseName: "Sea Breezes House",
            yearlyHouseRent: "1750.000.000",
            bedRooms: 5,
            bathRooms: 2
        },{
            house: image.house1,
            houseName: "Orchad House",
            yearlyHouseRent: "2500.000.000",
            bedRooms: 6,
            bathRooms: 4
        },
        {
            house: image.house2,
            houseName: "The Hollies House",
            yearlyHouseRent: "2000.000.000",
            bedRooms: 5,
            bathRooms: 3
        },
        {
            house: image.house3,
            houseName: "Sea Breezes House",
            yearlyHouseRent: "1750.000.000",
            bedRooms: 5,
            bathRooms: 2
        },
    ]

    return (
        <View style={{ flex: 1 }}>
            <Modal isVisible={modal} backdropColor="white" backdropOpacity={1} >
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text><AntDesign name="caretleft" /> Back</Text>
                    </TouchableOpacity>
                    <ScrollView>
                        {list.map(house => (
                            <View style={styles.houses}>
                                <Image source={house.house} style={styles.listedImage} />
                                <View>
                                    <Text style={styles.houseName}>{house.houseName}</Text>
                                    <Text style={styles.perHouseRent}>
                                        {`Rs ${house.yearlyHouseRent} / year`}
                                    </Text>
                                    <View style={styles.availability}>
                                        <View style={styles.bedRoom}>
                                            <Icon name="bed" size={15} color={color.gray} />
                                            <Text>{house.bedRooms} BedRoom</Text>
                                        </View>
                                        <View style={styles.bathRoom}>
                                            <Icon name="bath" size={15} color={color.gray} />
                                            <Text>{house.bathRooms} BathRoom</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </Modal>

        </View>
    );
}

export default HousesModal;

const styles = StyleSheet.create({
    recommendation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    Bfu: {
        color: color.black
    },
    seeMore: {
        color: color.gray
    },
    listedImage: {
        height: 60,
        width: 70,
        borderRadius: 10,
        marginVertical: 10
    },
    houses: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        backgroundColor: "rgba(0, 0, 0, 0.030)",
        margin: 5,
        borderRadius:10,
        padding:5
    },
    availability: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 10
    },
    bedRoom: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    bathRoom: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    perHouseRent: {
        color: "#0A8ED9"
    },
    houseName: {
        color: color.black,
        fontSize: 16,
        fontWeight: '500'
    }
})