import React from 'react';
import { View, Text, Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Header() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logoImg} resizeMode={"stretch"} source={logoImg} />
                <Text style={styles.headerText}>
                    Lutando contra o <Text style={styles.textBold}>Covid19</Text>
                </Text>
            </View>
        </View>
    );
}