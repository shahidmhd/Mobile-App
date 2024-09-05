import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../../Utils/GlobalApi'
import BusinessListitemSmall from './BusinessListitemSmall'

export default function BusinessList() {
    const [BusinessList, setBusinessList] = useState([])

    useEffect(() => {
        getBusinessList()
    }, [])

    const getBusinessList = () => {
        GlobalApi.getBusinessList().then((data) => {
            setBusinessList(data.businessLists)
            // console.log(data);
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <View style={{ marginTop: 20 }}>
            <Heading text={'Latest Business'} isViewAll={true} />
            <FlatList
                data={BusinessList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 10 }}>
                        <BusinessListitemSmall business={item} />
                    </View>

                )}
            />
        </View>
    )
}