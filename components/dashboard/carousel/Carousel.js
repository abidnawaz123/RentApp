import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import Icon from "react-native-vector-icons/FontAwesome5"

import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { color } from '../../shared/colors';
import { image } from '../../shared/images';

const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: image.house1,
    },
    {
        title: 'Earlier this morning, NYC ',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: image.house2,

    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: image.house3,

    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: image.house1,
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: image.house1,
    },
];
const { width: screenWidth,height: screenHeight } = Dimensions.get('window');

const MyCarousel = props => {
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);

    //   const goForward = () => {
    //     carouselRef.current.snapToNext();
    //   };

    useEffect(() => {
        setEntries(ENTRIES1);
    }, []);

    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={item.illustration}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <View style={styles.distanceWrapper}>
                    <Icon name="location-arrow" color="white" />
                    <Text style={styles.distance}>1.8 km</Text>
                </View>
                <View style={styles.cardShadow} >
                    <Text style={styles.locationName}>
                        {item.title}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <>
            <View style={styles.listView}>
                <Text style={{color:color.black}}>Near From you</Text>
                <Text style={{color:color.gray}}>See more</Text>
            </View>
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}
            />
        </>
    );
};

export default MyCarousel;

const styles = StyleSheet.create({
    item: {
        width: screenWidth - 80,
        height: screenWidth - 10,
        marginVertical: 30,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }),
        backgroundColor: 'white',
        borderRadius: 30,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        position: 'relative',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    distanceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: "rgba(0, 0, 0, 0.24)",
        maxWidth: 150,
        borderRadius: 15,
        padding: 10,
    },
    distance: {
        color: color.white
    },
    cardShadow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        height: 90,
        width: "100%",
        opacity: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.30)',
        borderBottomStartRadius:30,
        borderBottomEndRadius:30
    },
    locationName: {
        color: "white",
        fontWeight: '400',
        fontSize: 23,
        zIndex: 1,
    },
    listView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
    }
});