import { StyleSheet, Text, View } from 'react-native'
import {StatusBar} from 'expo-Status-bar'

export default function Home () {
  return (
    <View style={styles.container} >
      <Text>Welcome Home!</Text>
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