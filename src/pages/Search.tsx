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
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import database from '@react-native-firebase/database'
import React, { useEffect, useState } from 'react'
import ButtonItem from '../components/ButtonItem'
import { useNavigate } from 'react-router-native'
import Button from '../components/Buttons/Button'

export default function SearchUser() {
  const [name, setName] = useState<string>('')
  const [users, setUsers] = useState<any>([])
  const [user, setUser] = useState<any>([])

  BackHandlerPage()

  useEffect(() => {
    if (!name) setUser([])
  }, [name])

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
      <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
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
            <Button onPress={handleSubmit}>Buscar</Button>
          </View>
        </View>
        <View style={styles.divider}>
          <Text style={styles.dividerText}>Usuarios filtrados</Text>
        </View>
        <View style={styles.containerInputs}>
          {user.length > 0 ? (
            <FlatList data={user} renderItem={({ item, index }) => <Item item={item} index={index} />} />
          ) : (
            <View style={styles.item}>
              <Text style={styles.font}>No has buscado un usuario aún</Text>
            </View>
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
  const [open, setOpen] = useState(true)
  const [openEdit, setOpenEdit] = useState(false)
  const srcLogo: ImageURISource = require('../../src/public/garbage.png')
  const srcLogo2: ImageURISource = require('../../src/public/edit.png')
  const style = open && styles.containerText
  const [displayName, setDisplayName] = useState<string>(item.nombre)
  const reference = database().ref(`/usuarios/${item.uid}`)
  const navigate = useNavigate()
  const [id, setId] = useState<string>(item.identificacion)
  const [phoneNumber, setPhoneNumber] = useState<string>(item.telefono)
  const [adress, setAdress] = useState<string>(item.direccion)

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

  const handleUpdate = () => {
    if (displayName.length > 0 && id.length > 0 && phoneNumber.length > 0 && adress.length > 0) {
      Alert.alert('', 'Estas seguro de modificar al usuario?, serás redirigido al inicio', [
        {
          text: 'Aceptar',
          onPress: () => {
            reference.update({
              nombre: displayName,
              telefono: phoneNumber,
              direccion: adress,
              identificacion: id,
            })
            navigate('/')
          },
        },
        {
          text: 'Cancelar',
          onPress: () => null,
          style: 'cancel',
        },
      ])
    } else {
      Alert.alert('Todos los campos son obligatorios')
    }
  }

  const handleClicl = () => {
    //setOpen(!open)
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
              <Text style={styles.textInputDetail}>Identificación *</Text>
              <TextInput
                style={styles.input}
                onChangeText={setId}
                value={id.replace(/[^0-9]/g, '')}
                placeholder="Ingresa una identificación"
                keyboardType="numeric"
              />
              <Text style={styles.textInputDetail}>Numero de teléfono *</Text>
              <TextInput
                style={styles.input}
                onChangeText={setPhoneNumber}
                value={phoneNumber.replace(/[^0-9]/g, '')}
                placeholder="Ingresa el teléfono"
                textContentType="telephoneNumber"
                keyboardType="numeric"
              />
              <Text style={styles.textInputDetail}>Dirección *</Text>
              <TextInput
                style={styles.input}
                onChangeText={setAdress}
                value={adress}
                placeholder="Ingresa una dirección"
                textContentType="addressCity"
              />
              <Button onPress={handleUpdate}>
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
    textAlign: 'auto',
  },
  containerText: {
    maxWidth: 220,
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
