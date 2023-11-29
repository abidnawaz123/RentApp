import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import TopHeader from './Header/Header'
import TabViewExample from './Tabs/TabSection'
import { image } from '../shared/images'
import ImageCard from './Cards/ImageCard'
import MyCarousel from './carousel/Carousel'
import HousingList from './HouseList/HousingList'

const Dashboard = () => {
    return (
        <>
            <View style={styles.mainWrapper}>
                <TopHeader />
                <MyCarousel/>
                <HousingList/>
            </View>
        </>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    mainWrapper: {
        paddingTop: 15,
        paddingHorizontal: 20
    },
})