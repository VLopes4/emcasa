import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    logoImg: {
        width: 140,
        height: 70
    },

    headerText: {
        fontSize: 16,
        color: '#737380'
    },

    incidentList: {
        marginTop: 32,
    },

    space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    Cases: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffd500',
    },

    Confirmed: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ff8800',
    },

    Deaths: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#e02041',
    },

    Recovered: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#03911b',
    },

    incident: {
        paddingHorizontal: 10,
        paddingVertical: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#e8e8e8',
    },

    incidentCountry: {
        fontSize: 20,
        color: '#41414d',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },

    incidentValue: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    incidentText: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    },

    //Global
    textBold: {
        fontWeight: 'bold',
    },
});