import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 15
    },

    title: {
        fontSize: 30,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 18,
        lineHeight: 24,
        color: '#737380',
        marginBottom: 10,
    },

    incidents: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    incidentCard: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    icoCard: {
        textAlign: 'center',
    },

    titleCard: {
        fontSize: 16,
        marginTop: 10,
    },

    recommendationCard: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: '#204075',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    donateCard: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: '#00540f',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    titleRecommendationCard: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    },

     space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    //WebView

    webContainer: {
        flex: 1
    },

    headerWeb: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
    },

    webLink: {
        flexDirection: 'row',
    },

    icoWeb: {
        marginTop: 2,
    },

    webLinkText: {
        fontSize: 18,
        color: '#00c763',
        marginLeft: 10,
    }

});