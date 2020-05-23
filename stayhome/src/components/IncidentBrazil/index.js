import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';

import styles from './styles';

import api from '../../services/api';

export default function IncidentBrazil() {
    const [brazilIncident, setBrazilIncident] = useState([]);
    const [updateIncident, setUpdateIncident] = useState('');

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

    useEffect(() => {
        loadIncidentsBrazil();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.incidentCountry}>
                <Text style={styles.incidentTitleCountry}>{brazilIncident.country}</Text>
                <View style={styles.space}>
                    <View style={styles.CasesCountry}>
                        <Text style={styles.incidentValueCountry}>{brazilIncident.cases}</Text>
                        <Text style={styles.incidentTextCountry}>Casos</Text>
                    </View>
                    <View style={styles.ConfirmedCountry}>
                        <Text style={styles.incidentValueCountry}>{brazilIncident.confirmed}</Text>
                        <Text style={styles.incidentTextCountry}>Confirmados</Text>
                    </View>
                    <View style={styles.DeathsCountry}>
                        <Text style={styles.incidentValueCountry}>{brazilIncident.deaths}</Text>
                        <Text style={styles.incidentTextCountry}>Mortes</Text>
                    </View>
                    <View style={styles.RecoveredCountry}>
                        <Text style={styles.incidentValueCountry}>{brazilIncident.recovered}</Text>
                        <Text style={styles.incidentTextCountry}>Recuperados</Text>
                    </View>
                </View>

                <Text style={styles.incidentUpdate}>{updateIncident}</Text>
            </View>
        </View>
    );
}