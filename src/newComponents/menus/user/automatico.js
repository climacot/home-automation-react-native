import { Button, Image, Text, View } from 'react-native'
import { Link } from 'react-router-native'
import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

export default function UserMenuAutomatic() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date)
    hideDatePicker()
  }

  return (
    <View>
      <Text style={{ marginTop: 30 }}>Temperatura limite ventiladores</Text>
      <Text style={{ marginTop: 10 }}>Hora encendido alarmas</Text>
      <View>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <Text style={{ marginTop: 10 }}>Encender o apagar luces</Text>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>
        <Link
          underlayColor={'#F7F7F7'}
          to={'/create'}
          style={{
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            margin: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: 80,
            flexGrow: 1,
          }}>
          <>
            <Image style={{ height: 30, width: 30 }} source={require('../../../public/user.png')} />
            <Text>Habitacion</Text>
          </>
        </Link>
        <Link
          underlayColor={'#F7F7F7'}
          to={'/create'}
          style={{
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            maxWidth: 80,
            margin: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexGrow: 1,
          }}>
          <>
            <Image style={{ height: 30, width: 30 }} source={require('../../../public/user.png')} />
            <Text>Baño</Text>
          </>
        </Link>
        <Link
          underlayColor={'#F7F7F7'}
          to={'/create'}
          style={{
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            margin: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: 80,
            flexGrow: 1,
          }}>
          <>
            <Image style={{ height: 30, width: 30 }} source={require('../../../public/user.png')} />
            <Text>Cocina</Text>
          </>
        </Link>
        <Link
          underlayColor={'#F7F7F7'}
          to={'/create'}
          style={{
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            margin: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: 80,
            flexGrow: 1,
          }}>
          <>
            <Image style={{ height: 30, width: 30 }} source={require('../../../public/user.png')} />
            <Text>Sala</Text>
          </>
        </Link>
      </View>
    </View>
  )
}
