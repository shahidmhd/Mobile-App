import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'

export default function HomeScreen() {
  return (
    <ScrollView>
      <View>
        {/* Header */}
        <Header />
        {/* Header */}
        {/* Slider */}
        <View style={{ padding: 20 }}>
          <Slider />
          {/* Categories */}
          <Categories />
          {/* Business List */}
          <BusinessList />
        </View>
        {/* Slider */}


      </View>
    </ScrollView>
  )
}