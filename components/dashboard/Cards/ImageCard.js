// import React from 'react'
// import { StyleSheet, View, Image, useWindowDimensions, Text } from 'react-native'
// import { image } from '../../shared/images'
// import { TabView, SceneMap } from 'react-native-tab-view';


// const FirstRoute = () => (
//     <View style={{ flex: 1, backgroundColor: 'red', height: 200, width: 300 }} />
// );

// const SecondRoute = () => (
//     <View style={{ flex: 1, backgroundColor: 'blue', height: 200, width: 300 }} />
// );

// const ThirdRoute = () => (
//     <View style={{ flex: 1, backgroundColor: 'green', height: 200, width: 300 }} >
//         <Text>This is Third Route</Text>
//     </View>
// );

// const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//     third: ThirdRoute,
// });


// const ImageCard = () => {

//     const layout = useWindowDimensions();

//     const [index, setIndex] = React.useState(0);
//     const [routes] = React.useState([
//         { key: 'first', title: 'First' },
//         { key: 'second', title: 'Second' },
//         { key: 'third', title: 'Third' },
//     ]);

//     return (
//         <View>
//             <TabView
//                 navigationState={{ index, routes }}
//                 renderScene={renderScene}
//                 onIndexChange={setIndex}
//                 initialLayout={{ width: layout.width }}
//             />
//             {/* <View style={styles.imagesWrapper}>
//                 <Image source={image.house1} style={styles.image} />
//                 <Image source={image.house2} style={styles.image} />
//                 <Image source={image.house3} style={styles.image} />
//             </View> */}
//         </View>
//     )
// }

// export default ImageCard

// const styles = StyleSheet.create({
//     imagesWrapper: {
//         display: "flex",
//         flexDirection: "row",
//     },
//     image: {
//         height: 200,
//         width: 300,
//         borderRadius: 10
//     }
// })

import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const FourthRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third : ThirdRoute,
    fourth: FourthRoute
});

export default function TabViewExample() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title: 'Third' },
        { key: 'fourth', title: 'Fourth' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}
