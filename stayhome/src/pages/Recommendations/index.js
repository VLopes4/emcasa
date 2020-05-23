import React, { useState, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import RecommendationsModal from '../../components/RecommendationsModal';
import styles from './styles';

import imgHands from '../../assets/recommendations/hands.png';
import imgQuare from '../../assets/recommendations/quarantine.png';
import imgBed from '../../assets/recommendations/bed.png';
import imgCough from '../../assets/recommendations/cough.png';
import imgMask from '../../assets/recommendations/mask.png';
import imgClean from '../../assets/recommendations/clean.png';

export default function Recommendations() {
    const [visibleModal, setVisibleModal] = useState(false);
    const [dataModal, setDataModal] = useState(false);


    const toggleModalClose = useCallback(() => {

        setVisibleModal(false);

    }, []);


    return (
        <>
            <Header/>
            <View style={styles.container}>
                <View style={styles.recommendationsCardMargin}>
                    <View style={styles.recommendationsSpace}>
                        <TouchableOpacity onPress={() => setVisibleModal(1)} style={styles.recommendationsCard}>
                            <Image style={styles.imgIcon} source={imgHands}/>
                            <Text style={styles.recommendationsCardText}>Lave as mãos</Text>
                            <Text style={styles.recommendationsCardText}>com frequência</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setVisibleModal(2)} style={styles.recommendationsCard}>
                            <Image style={styles.imgIcon} source={imgQuare}/>
                            <Text style={styles.recommendationsCardTextShort}>Evite contato</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recommendationsSpace}>
                        <TouchableOpacity onPress={() => setVisibleModal(3)} style={styles.recommendationsCard}>
                            <Image style={styles.imgIcon} source={imgBed}/>
                            <Text style={styles.recommendationsCardText}>Fique em casa</Text>
                            <Text style={styles.recommendationsCardText}>se estiver doente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setVisibleModal(4)} style={styles.recommendationsCard}>
                            <Image style={styles.imgIcon} source={imgCough}/>
                            <Text style={styles.recommendationsCardText}>Cubra a</Text>
                            <Text style={styles.recommendationsCardText}>boca ao tossir</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recommendationsSpace}>
                        <TouchableOpacity onPress={() => setVisibleModal(5)} style={styles.recommendationsCard}>
                            <Image style={styles.imgIcon} source={imgMask}/>
                            <Text style={styles.recommendationsCardTextShort}>Use máscara</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setVisibleModal(6)} style={styles.recommendationsCard}>
                            <Image style={styles.imgIcon} source={imgClean}/>
                            <Text style={styles.recommendationsCardTextShort}>Limpe e desinfete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <RecommendationsModal close={toggleModalClose} visible={visibleModal}/>
        </>
    );
}