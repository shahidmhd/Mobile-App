import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi.js';
import Heading from '../../Components/Heading.jsx';


export default function Slider() {

    const [Sliders, setSliders] = useState([])

    useEffect(() => {
        getSliders()
    }, [])

    const getSliders = () => {
        GlobalApi.getSlider().then((data) => {
            setSliders(data.sliders)
            console.log(data);
        }).catch((error) => {
            console.error(error);
        });

    }




    return (
        <View>
            <Heading text={'offers for you'}/>
            <FlatList
                data={Sliders}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 20 }}>
                        <Image source={{ uri: item?.image?.url }}
                            style={styles.sliderImage} />
                    </View>

                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginBottom: 10
    },
    sliderImage: {
        width: 270,
        height: 150,
        borderRadius: 30,
        objectFit: 'contain'

    }
})
