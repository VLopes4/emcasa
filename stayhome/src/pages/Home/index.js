import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, Clipboard } from 'react-native';
import { WebView } from 'react-native-webview';

import { useNavigation } from '@react-navigation/native';
import { Entypo, Fontisto, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

import Header from '../../components/Header';
import IncidentBrazil from '../../components/IncidentBrazil';
import styles from './styles';

export default function Home() {
    const [timeNow, setTimeNow] = useState(new Date().getHours());
    const [userTime, setUserTime] = useState('');

    const [webIsFalse, setWebIsFalse] = useState(false);
    const [webLink, setWebLink] = useState('');

    const navigation = useNavigation();

    function navigateToCountries(){
        navigation.navigate('Countries');
    }

    function navigateToStates() {
        navigation.navigate('States');
    }

    function navigateToRecommendations(){
        navigation.navigate('Recommendations');
    }

    function backToHome(){
        setWebLink('');
        setWebIsFalse(false);
    }

    function webViewDonate(){
        setWebLink('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=P3465JFGN6U7J&source=url');
        setWebIsFalse(true);
    }

    async function writeToClipboard (){
        await Clipboard.setString('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=P3465JFGN6U7J&source=url');
        alert('Copiado para área de transferência!');
    };

    useEffect(() => {
        
        if(timeNow >= 5 && timeNow < 12) {
            setUserTime("Bom dia!");
        } else if(timeNow >= 12 && timeNow < 19) {
            setUserTime("Boa tarde!");
        } else {
            setUserTime("Boa noite!")
        }

    }, [timeNow])

    if(!webIsFalse){
        return (
            <>
                <Header />
                <View style={styles.container}>
                    {timeNow ? (
                        <Text style={styles.title}>{userTime}</Text>
                    ) : 
                    timeNow == 0 ? (
                        <Text style={styles.title}>{userTime}</Text>
                    ) :
                    (
                        <Text style={styles.title}>Bem-Vindo!</Text>
                    )}
                    
                    <Text style={styles.description}>Fonte: Organização Mundial da Saúde</Text>
                
                    <IncidentBrazil/>
    
                    <View style={styles.incidents} >
                        <TouchableOpacity onPress={navigateToCountries} style={styles.incidentCard}>
                            <Entypo style={styles.icoCard} name="globe" size={40} color="#2d67e3" />
                            <Text style={styles.titleCard}>Casos no Mundo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={navigateToStates} style={styles.incidentCard}>
                            <Entypo style={styles.icoCard} name="location" size={40} color="#2d67e3" />
                            <Text style={styles.titleCard}>Casos nos Estados Brasileiros</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={navigateToRecommendations} style={styles.recommendationCard}>
                        <Text style={styles.titleRecommendationCard}>Recomendações da OMS</Text>
                        <Fontisto style={styles.icoCard} name="doctor" size={30} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={webViewDonate} style={styles.donateCard}>
                        <Text style={styles.titleRecommendationCard}>Donate</Text>
                        <FontAwesome5 style={styles.icoCard} name="donate" size={30} color="#daa520" />
                    </TouchableOpacity>
                </View>
            </>
        );
    } else {

        return (
            <View style={styles.webContainer}>
                <View style={styles.headerWeb}>
                    <TouchableOpacity onPress={backToHome}>
                        <Ionicons name="md-arrow-round-back" size={24} color="#8f8f8f" />
                    </TouchableOpacity>
                    <View style={styles.webLink}>
                        <FontAwesome style={styles.icoWeb} name="lock" size={20} color="#00c763" />
                        <Text style={styles.webLinkText}>Paypal.com</Text>
                    </View>
                    <TouchableOpacity onPress={writeToClipboard}>
                        <Ionicons name="ios-copy" size={24} color="#8f8f8f" />
                    </TouchableOpacity>
                </View>
                <WebView source={{ uri: webLink }} />
            </View>
        );
    }
}