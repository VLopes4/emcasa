import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 15
    },

    spaceState: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    ufIncidentImage: {
        width: 26,
        height: 16,
        marginTop: 6,
        marginLeft: 'auto',
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
        marginBottom: 10,
        marginRight: 'auto',
        marginLeft: 10,
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