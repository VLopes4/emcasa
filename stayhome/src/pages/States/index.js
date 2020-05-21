import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import styles from './styles';

export default function States() {
    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.incidentCountry}>
                    <Text style={styles.incidentTitleCountry}>BRASIL</Text>
                    <View style={styles.space}>
                        <View style={styles.CasesCountry}>
                            <Text style={styles.incidentValueCountry}>100000</Text>
                            <Text style={styles.incidentTextCountry}>Casos</Text>
                        </View>
                        <View style={styles.ConfirmedCountry}>
                            <Text style={styles.incidentValueCountry}>6000</Text>
                            <Text style={styles.incidentTextCountry}>Confirmados</Text>
                        </View>
                        <View style={styles.DeathsCountry}>
                            <Text style={styles.incidentValueCountry}>500</Text>
                            <Text style={styles.incidentTextCountry}>Mortes</Text>
                        </View>
                        <View style={styles.RecoveredCountry}>
                            <Text style={styles.incidentValueCountry}>80</Text>
                            <Text style={styles.incidentTextCountry}>Recuperados</Text>
                        </View>
                    </View>
                </View>
                <FlatList 
                    style={styles.incidentList}
                    data={[1, 2, 3]}
                    keyExtractor={incident => String(incident)}
                    showsVerticalScrollIndicator={false}
                    renderItem={() => (
                        <View style={styles.incident}>
                            <Text style={styles.incidentState}>SÃO PAULO</Text>
                            <View style={styles.space}>
                                <Text style={styles.incidentValue}>Casos:</Text>
                                <Text style={styles.Cases}>1000</Text>
                            </View>
                            <View style={styles.space}>
                                <Text style={styles.incidentValue}>Suspeitos:</Text>
                                <Text style={styles.Suspects}>6000</Text>
                            </View>
                            <View style={styles.space}>
                                <Text style={styles.incidentValue}>Mortes:</Text>
                                <Text style={styles.Deaths}>500</Text>
                            </View>
                            <View style={styles.space}>
                                <Text style={styles.incidentValue}>Descartados:</Text>
                                <Text style={styles.Refuses}>80</Text>
                            </View>
                        </View>
                    )}    
                />
            </View>
        </>
    );
}
