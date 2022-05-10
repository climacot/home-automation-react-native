import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello world!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
