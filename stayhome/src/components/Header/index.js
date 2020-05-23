import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import logoImg from '../../assets/logo/logo.png';
import sadImg from '../../assets/header/sadluta.png';

import styles from './styles';

export default function Header() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logoImg} resizeMode={"stretch"} source={logoImg} />
                <Image style={styles.sadImg} resizeMode={'cover'} source={sadImg} />
            </View>
        </View>
    );
}