import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
    },

    logoImg: {
        width: 140,
        height: 70
    },

    headerText: {
        fontSize: 16,
    },

    textBold: {
        fontWeight: 'bold',
    },
});