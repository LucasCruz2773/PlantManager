import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors'

export function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😄
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text>
                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas 
                    plantinhas com muito cuidado.
                </Text>
                <View style={styles.footer}>
                    <Button title="Começar" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15,
        fontWeight: 'bold',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 17,
        paddingHorizontal: 10,
        color: colors.heading,
        marginTop: 10,
    },
    emoji: {
        fontSize: 78,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 30,
    },
})