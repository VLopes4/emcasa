import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import styles from './styles';

import api from '../../services/api';

export default function Countries() {
    const [incidents, setIncidents] = useState([]);
    const navigation = useNavigation();

    function navigateToStates() {
        navigation.navigate('States');
    }

    async function loadIncidentsCountries(){
        const response = await api.get('/report/v1/countries');

        setIncidents(response.data)
    }

    useEffect(() => {
        loadIncidentsCountries();
    }, [incidents]);

    return (
        <>
            <Header/>
            <View style={styles.container}>   
                <Text style={styles.title}>Bem-Vindo!</Text>
                <Text style={styles.description}>Atualizado 20/05/2020 - 19:32, fonte: OMS</Text>
                
                <FlatList 
                    style={styles.incidentList}
                    data={incidents}
                    keyExtractor={incident => String(incident.country)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: incident }) => (
                        <View style={styles.incident}>
                            <Text style={styles.incidentCountry}>{incident.country}</Text>
                            <View style={styles.space}>
                                <View style={styles.Cases}>
                                    <Text style={styles.incidentValue}>{incident.cases}</Text>
                                    <Text style={styles.incidentText}>Casos</Text>
                                </View>
                                <View style={styles.Confirmed}>
                                    <Text style={styles.incidentValue}>{incident.confirmed}</Text>
                                    <Text style={styles.incidentText}>Confirmados</Text>
                                </View>
                                <View style={styles.Deaths}>
                                    <Text style={styles.incidentValue}>{incident.deaths}</Text>
                                    <Text style={styles.incidentText}>Mortes</Text>
                                </View>
                                <View style={styles.Recovered}>
                                    <Text style={styles.incidentValue}>{incident.recovered}</Text>
                                    <Text style={styles.incidentText}>Recuperados</Text>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.detailsButton} onPress={navigateToStates}>
                                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                                <Feather name="arrow-right" size={16} color="#E02041" />
                            </TouchableOpacity>

                        </View>
                    )}    
                />
            </View>
        </>
    );
}
