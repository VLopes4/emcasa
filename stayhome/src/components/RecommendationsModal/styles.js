import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
    },

    imgIco: {
        width: 100,
        height: 100,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    title: {
        fontSize: 18,
        color: '#2694BB',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },

    space: {
        flexDirection: 'row',
        marginTop: 10,
    },

    info: {
        fontSize: 16,
        marginLeft: 5,
        textAlign: 'justify',
        width: 320
    },

    icon: {
        marginTop: 3,
    },

    bold: {
        fontWeight: 'bold',
    },

    btnClose: {
        marginTop: 20,
        paddingTop: 20,
        marginBottom: 10,
        borderColor: '#e8e8e8',
        borderTopWidth: 1
    },

    close: {
        color: '#2694BB',
        fontSize: 16,
        textAlign: 'center'
    }
    
});