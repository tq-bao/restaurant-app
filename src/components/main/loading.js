import React from 'react'
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { colors, fonts } from '../../styles/variable'
import { scale } from '../../styles/responsive'

export default function Loading() {
  const store = useSelector(store => store.loadingReducer)

  return (
    <>
      {
        store.loading &&
        <View style={styles.ctn}>
          <ActivityIndicator size='small' color={colors.main} />
          <Text style={styles.txtContent}>{store.content}</Text>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  ctn: {
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    left: 0,
    backgroundColor: '#ffffff21',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  txtContent: {
    textAlign: 'center',
    fontFamily: fonts.Normal,
    marginTop: scale(15),
    fontSize: scale(14)
  }
})