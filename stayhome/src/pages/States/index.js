import React, { useEffect, useCallback, useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';

import Header from '../../components/Header';
import IncidentBrazil from '../../components/IncidentBrazil';
import styles from './styles';

import api from '../../services/api';

export default function States() {
    const [brazilIncident, setBrazilIncident] = useState([]);
    const [updateIncident, setUpdateIncident] = useState('');

    const [statesIncidents, setStatesIncidents] = useState([]);

    const loadIncidentsBrazil = useCallback(async () => {
        
        const { data:response } = await api.get('/report/v1/brazil');
        const date = response.data.updated_at;
        setBrazilIncident(response.data);

        
        const parsedDate = parseISO(date);

        const formattedDate = format(
            parsedDate,
            "'Atualizado dia' dd 'de' MMMM 'de' yyyy ', às ' HH:mm'h'",
            {locale: pt}
        );

        setUpdateIncident(formattedDate);

    }, []);

    const loadIncidentsStates = useCallback(async () => {

        const { data:response } = await api.get('/report/v1');
        setStatesIncidents(response.data);

    }, [])

    useEffect(() => {
        loadIncidentsBrazil();
        loadIncidentsStates();
    }, []);

    

    return (
        <>
            <Header />
            <View style={styles.container}>
                <IncidentBrazil />
                <FlatList 
                    style={styles.incidentList}
                    data={statesIncidents}
                    keyExtractor={incident => String(incident.uid)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: incident }) => (
                        <View style={styles.incident}>
                            <View style={styles.spaceState}>
                                <Image style={styles.ufIncidentImage} source={{uri: `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${incident.uf}.png`}}/>
                                <Text style={styles.incidentState}>{incident.state}</Text>
                            </View>
                            <View style={styles.space}>
                                <Text style={styles.incidentValue}>Casos:</Text>
                                <Text style={styles.Cases}>{incident.cases}</Text>
                            </View>
                            <View style={styles.space}>
                                <Text style={styles.incidentValue}>Suspeitos:</Text>
                                <Text style={styles.Suspects}>{incident.suspects}</Text>
                            </View>
                            <View style={styles.space}>
                                <Text style={styles.incidentValue}>Mortes:</Text>
                                <Text style={styles.Deaths}>{incident.deaths}</Text>
                            </View>
                            <View style={styles.space}>
                                <Text style={styles.incidentValue}>Descartados:</Text>
                                <Text style={styles.Refuses}>{incident.refuses}</Text>
                            </View>
                        </View>
                    )}    
                />
            </View>
        </>
    );
}
