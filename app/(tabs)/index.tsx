import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coffee shop</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1, //So the containing view fills the screen
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  }
})