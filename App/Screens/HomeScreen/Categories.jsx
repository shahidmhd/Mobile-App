import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading'
import Colors from '../../Utils/Colors'

export default function Categories() {
    const [Categories, setCategories] = useState([])

    useEffect(() => {
        getcategories()
    }, [])

    const getcategories = () => {
        GlobalApi.getCategories().then((data) => {
            setCategories(data?.categories)
            console.log(data);
        }).catch((error) => {
            console.error(error);
        });

    }
    return (
        <View style={{ marginTop: 10 }}>
            <Heading text={'Categories'} isViewAll={true} />
            <FlatList
                data={Categories}
                numColumns={4}
                renderItem={({ item, index }) => index <= 3 && (
                    <View style={styles.container}>
                        <View style={styles.iconContainer}>
                            <Image source={{ uri: item?.icon?.url }}
                                style={{ width: 30, height: 30 }} />
                        </View>
                        <Text style={{ fontFamily: 'outfit-medium', marginTop: 5 }}>{item?.name}</Text>
                    </View>

                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'

    },
    iconContainer: {
        backgroundColor: Colors.LIGHT_GRAY,
        padding: 17,
        borderRadius: 99

    }
})
