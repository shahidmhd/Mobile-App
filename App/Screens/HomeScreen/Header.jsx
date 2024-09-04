import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function Header() {
    return (
        <View style={styles.container}>
            {/* profile section */}
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image
                        source={require('../../../assets/images/young-pretty-woman-smiling-broadly-looking-happy-positive-confident-successful-with-both-thumbs-up_1194-116790.jpg')}
                        style={styles.userImage}
                    />
                    <View>
                        <Text style={{ color: Colors.WHITE }}>Welcome,</Text>
                        <Text style={{ color: Colors.WHITE, fontSize: 20,fontFamily:'outfit-bold' }}>Shahid vk</Text>
                    </View>
                </View>
                <FontAwesome name="bookmark-o" size={27} color="white" />
            </View>
            {/* search bar */}
            <View style={styles.searchBarContainer}>
                <TextInput placeholder='Search' style={styles.textInput} />
                <FontAwesome name="search" size={24} color={Colors.PRIMARY} style={styles.searchbtn} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    profileMainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    searchBarContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom:10
    },
    textInput: {
        padding: 7,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        paddingHorizontal: 16,
        width: '85%',
        fontSize:16
    },
    searchbtn: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    }
})
