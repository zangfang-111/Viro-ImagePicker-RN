import React, { Component } from "react"
import { SafeAreaView } from "react-native"
import NavigationRouter from "./navigation/NavigationRouter"

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
        <NavigationRouter />
      </SafeAreaView>
    )
  }
}
