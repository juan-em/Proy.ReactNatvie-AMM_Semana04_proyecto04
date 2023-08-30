import { StyleSheet, Text, View } from 'react-native'
import {StatusBar} from 'expo-Status-bar'

export default function Settings () {
  return (
    <View style={styles.container} >
      <Text>Setup time!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})