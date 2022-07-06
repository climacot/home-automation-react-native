import { Image, Text, View, Button } from 'react-native'
import React from 'react'
import Container from '../components/layouts/container'
import HeaderUserInfo from '../components/layouts/headerInfoUser'
import Nav from '../components/navs/nav'
import SmallCard from '../components/buttons/smallCard'
import Card from '../components/buttons/card'
import ModeButton from '../components/buttons/mode'
import useMode from '../hooks/useMode'
import ManualMode from '../components/layouts/manualMode'
import AutomaticMode from '../components/layouts/automaticMode'
import ScrollView from '../components/layouts/scrollView'

export default function UserPage() {
  const { mode } = useMode()

  return (
    <ScrollView>
      <Container>
        <HeaderUserInfo />
        {mode ? <ManualMode /> : <AutomaticMode />}
        <Nav />
      </Container>
    </ScrollView>
  )
}
