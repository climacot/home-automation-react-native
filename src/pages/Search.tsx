import { BackHandlerPage } from '../androidComponents/BackHandlerPage'
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Button from '../components/Button'
import database from '@react-native-firebase/database'
import React, { useEffect, useState } from 'react'

export default function SearchUser() {
  const [name, setName] = useState<string>('')
  const [users, setUsers] = useState<any>([])
  const [user, setUser] = useState<any>([])

  BackHandlerPage()

  useEffect(() => {
    const reference = database().ref('usuarios')

    reference.once('value').then(snapshot => {
      const arr = []

      for (const [, value] of Object.entries(snapshot.val())) {
        arr.push(value)
      }

      console.log(arr)

      const arrr = arr.filter((u: any) => u.cargo === 'usuario')
      setUsers(arrr)
    })
  }, [])

  const handleSubmit = () => {
    const findUser = users.filter((u: any) => u.nombre.toLowerCase().includes(name.toLowerCase()))
    setUser(findUser)
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Buscar usuario</Text>
      </View>
      <View style={styles.containerInputs}>
        <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="Nombre del usuario a buscar" />
        <View style={styles.containerButton}>
          <Button onPress={handleSubmit} />
        </View>
      </View>
      <View style={styles.divider}>
        <Text style={styles.dividerText}>Usuarios filtrados</Text>
      </View>
      <View style={styles.containerInputs}>
        {user.length > 0 && (
          <FlatList
            data={user}
            renderItem={({ item, index }) => (
              <View key={index} style={styles.item}>
                <Text style={styles.font}>Correo: {item.correo}</Text>
                <Text style={styles.font}>Nombre: {item.nombre}</Text>
              </View>
            )}
          />
        )}
      </View>
      <View style={styles.divider}>
        <Text style={styles.dividerText}>Usuarios registrados</Text>
      </View>
      <View style={styles.containerInputs}>
        <FlatList
          data={users}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.item}>
              <Text style={styles.font}>Correo: {item.correo}</Text>
              <Text style={styles.font}>Nombre: {item.nombre}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  item: {
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#34495e',
  },
  error: {
    color: '#FF0000',
  },
  containerButton: {
    marginVertical: 20,
  },
  containerInfo: {
    paddingHorizontal: 10,
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 50,
  },
  containerInputs: {
    paddingHorizontal: 10,
  },
  active: {
    backgroundColor: '#00C82A',
  },
  disable: {
    backgroundColor: '#FF3F3F',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: '#000',
  },
  textInputDetail: {
    marginBottom: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 9999,
  },
  font: {
    color: '#fff',
    fontSize: 17,
  },
  divider: {
    padding: 10,
    backgroundColor: '#D8D8D8',
    marginVertical: 10,
  },
  dividerText: {
    textAlign: 'center',
  },
  separator: {
    marginBottom: 5,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
})
