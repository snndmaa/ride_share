import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const BottomNav = ({ handleLeftPress, handleRightPress }) => {
  return (
    <View style={styles.ArrowWrap}>
    <View style={styles.LeftIconWrap}>
        <Icon
         name='arrowleft'
         type='antdesign'
         style={{}}
         size={30}
         onPress={handleLeftPress}
        />
    </View>

    <TouchableOpacity
     style={styles.RightIconWrap}
     onPress={handleRightPress}
    >
        <Text style={styles.RightIconText}>Next </Text>

        <Icon
         name='arrowright'
         type='antdesign'
         color='white'
         size={24}
        />
    </TouchableOpacity>
</View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    ArrowWrap: {
        position: 'absolute',
        bottom: 0,
        width: '90%',
        height: 70,
        marginBottom: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    LeftIconWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        height: 60,
        width: 60,
        backgroundColor: '#DCDFE4',
    },
    RightIconWrap: {
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        height: 55,
        width: 90,
    },
    RightIconText: {
        color: 'white',
        fontSize:18,
    }
})