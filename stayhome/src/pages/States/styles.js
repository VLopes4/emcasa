import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 15
    },

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
        marginBottom: 20
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

    incidentList: {
        marginTop: 10,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#e8e8e8',
    },

    incidentState: {
        fontSize: 20,
        color: '#41414d',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },

    incidentValue: {
        marginTop: 5,
        fontSize: 16,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    },

    //Global
    space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textBold: {
        fontWeight: 'bold',
    },

    Cases: {
        fontWeight: 'bold',
        color: '#ffd500'
    },

    Suspects: {
        fontWeight: 'bold',
        color: '#ff8800'
    },

    Deaths: {
        fontWeight: 'bold',
        color: '#e02041'
    },

    Refuses: {
        fontWeight: 'bold',
        color: '#03911b'
    },
});