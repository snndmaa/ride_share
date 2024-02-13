import { StyleSheet, Text, View } from 'react-native'

export const vericodeStyles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    HeadText1: {
        marginTop: 15,
        fontSize: 28,
        fontWeight: '600',
    },
    HeadText2: {
        fontSize: 28,
        fontWeight: '600',
    },
    CodeWrap: {
        // borderColor: 'green',
        // borderWidth: 2,
        flexDirection: 'row',
        marginTop: 40,
        width: '90%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    TipText: {
        marginTop: 40,
    },
    Button: {
        marginTop: 40,
        backgroundColor: '#4169E1',
        width: '25%',
        // height: 'fit-content',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        fontWeight: '600',
        color: '#FFFFFF'
    },

    ArrowWrap: {
        borderColor: 'green',
        borderWidth: 2,
        position: 'absolute',
        bottom: 0,
    }
})