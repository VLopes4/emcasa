import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    incidentCountry: {
        paddingHorizontal: 10,
        paddingVertical: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#e8e8e8',
    },

    incidentTitleCountry: {
        fontSize: 20,
        color: '#41414d',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        textTransform: 'uppercase'
    },

    CasesCountry: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffd500',
    },

    ConfirmedCountry: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ff8800',
    },

    DeathsCountry: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#e02041',
    },

    RecoveredCountry: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#03911b',
    },

    incidentValueCountry: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    incidentTextCountry: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },

    incidentUpdate: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 16,
    }, 

     //Global
     space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

});