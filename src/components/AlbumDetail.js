/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'


const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album

        return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainer}>
                    <Image 
                        style={styles.thumbnailStyle}
                        source={{ uri: thumbnail_image }} />
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={styles.imageStyle} 
                    source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url) }>
                Buy Now!
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 70,
        width: 70
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
})

export default AlbumDetail