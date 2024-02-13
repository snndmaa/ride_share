import { StyleSheet } from 'react-native'


export const emailScreenStyles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    HeadText: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '500',
    },
    emailWrap: {
        flexDirection: 'row',
        width: '90%',
        height: 52,
        marginTop: 10,
        borderRadius: 8,
        backgroundColor: '#EEEEEE',
        alignItems: 'center'
    },
    emailTextField: {
        // borderColor: 'green',
        // borderWidth: 2,
        width: '90%',
    },
})
