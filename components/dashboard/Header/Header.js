import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"
import { color } from '../../shared/colors'

const TopHeader = () => {
    return (
        <View>
            <Text style={styles.headerlabel}>Location</Text>
            <View style={styles.headerSection}>
                <Text>Jakarta</Text>
                <Icon name="bell" size={20} color={color.black} />
            </View>
            <View style={styles.searchfieldWrapper}>
                <TextInput style={styles.inputField} placeholder='Search address, or near you' />
                <Icon name="filter" style={styles.filterIcon} size={20} color={color.lightblue} />
            </View>
        </View>
    )
}

export default TopHeader

const styles = StyleSheet.create({
    headerlabel: {
        color: color.black,
        fontSize: 12,
        fontWeight: '300'
    },
    headerSection: {
        color: color.black,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputField: {
        backgroundColor: "#F7F7F7",
        borderRadius: 10,
        marginVertical: 10,
        maxWidth: 300,
        minWidth: 300
    },
    searchfieldWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center'
    },
    filterIcon: {
        backgroundColor: color.blue,
        padding:10,
        borderRadius:10
    }
})