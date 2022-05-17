import { BackHandlerPage } from '../androidComponents/BackHandlerPage'
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  ImageURISource,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import Button from '../components/Button'
import database from '@react-native-firebase/database'
import React, { useEffect, useState } from 'react'
import ButtonItem from '../components/ButtonItem'
import { useLocation, useNavigate } from 'react-router-native'

export default function SearchUser() {
  const [name, setName] = useState<string>('')
  const [users, setUsers] = useState<any>([])
  const [user, setUser] = useState<any>([])

  BackHandlerPage()

  useEffect(() => {
    const reference = database().ref('usuarios')

    reference.once('value').then(snapshot => {
      const arr = []

      for (const [key, value] of Object.entries(snapshot.val())) {
        arr.push({
          uid: key,
          cargo: value.cargo,
          correo: value.correo,
          direccion: value.direccion,
          foto: value.foto,
          identificacion: value.identificacion,
          nombre: value.nombre,
          telefono: value.telefono,
        })
      }

      const arrr = arr.filter((u: any) => u.cargo === 'usuario')
      setUsers(arrr)
    })
  }, [])

  const handleSubmit = () => {
    if (name) {
      const findUser = users.filter((u: any) => u.nombre.toLowerCase().includes(name.toLowerCase()))
      setUser(findUser)
    }
  }

  return (
    <ImageBackground style={{ height: '100%' }} source={require('../public/wallpaper.png')}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Buscar usuario</Text>
        </View>
        <View style={styles.containerInputs}>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholder="Nombre del usuario a buscar"
          />
          <View style={styles.containerButton}>
            <Button title="Buscar" onPress={handleSubmit}>
              <Text style={styles.titleButton}>Buscar</Text>
            </Button>
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
          <FlatList data={users} renderItem={({ item, index }) => <Item item={item} index={index} />} />
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const Item = ({ index, item }: { index: number; item: any }) => {
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const srcLogo: ImageURISource = require('../../src/public/garbage.png')
  const srcLogo2: ImageURISource = require('../../src/public/edit.png')
  const style = open && styles.containerText
  const [displayName, setDisplayName] = useState<string>(item.nombre)
  const reference = database().ref(`/usuarios/${item.uid}`)
  const navigate = useNavigate()

  const handleDelete = () => {
    Alert.alert('', 'Está seguro que desea eliminar el usuario?, serás redirigido al inicio', [
      {
        text: 'Aceptar',
        onPress: () => {
          reference.remove()
          navigate('/')
        },
      },
      {
        text: 'Cancelar',
        onPress: () => null,
        style: 'cancel',
      },
    ])
  }

  const handleClicl = () => {
    setOpen(!open)
    if (openEdit) setOpenEdit(!open)
  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={handleClicl}>
        <View>
          <View key={index} style={styles.item}>
            <View style={style}>
              <Text style={styles.font}>Correo: {item.correo}</Text>
              <Text style={styles.font}>Nombre: {item.nombre}</Text>
            </View>
            {open && (
              <View style={styles.containerOptions}>
                <ButtonItem onPress={() => setOpenEdit(!openEdit)} title="Eliminar">
                  <Image style={styles.logo} source={srcLogo2} />
                </ButtonItem>
                <Text>{'     '}</Text>
                <ButtonItem onPress={handleDelete}>
                  <Image style={styles.logo} source={srcLogo} />
                </ButtonItem>
              </View>
            )}
          </View>
          {openEdit && (
            <View style={styles.contanierModify}>
              <Text style={styles.textInputDetail}>Nombre de la persona *</Text>
              <TextInput
                style={styles.input}
                onChangeText={setDisplayName}
                value={displayName}
                placeholder="Ingresa el nombre"
                autoComplete="name"
                textContentType="name"
              />
              <Button>
                <Text style={styles.titleButton}>Actualizar campos</Text>
              </Button>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  contanierModify: {
    marginVertical: 10,
  },
  containerText: {
    width: 250,
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  containerOptions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  item: {
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#34495e',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: 20,
    height: 20,
  },
  font: {
    color: '#fff',
    fontSize: 17,
  },
  divider: {
    padding: 10,
    backgroundColor: '#C5C5C5',
    marginVertical: 10,
  },
  dividerText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
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
  titleButton: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
})
