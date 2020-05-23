import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },

    recommendationsCardMargin: {
        marginTop: 12,
    },

    recommendationsSpace: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    recommendationsCard: {
        width: 170,
        height: 170,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: '#204075',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#172f57',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
    },

    imgIcon: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },

    recommendationsCardText: {
        fontSize: 18,
        color: '#fff'
    },

    recommendationsCardTextShort: {
        fontSize: 18,
        marginTop: 20,
        color: '#fff'
    }

});