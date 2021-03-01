import React, { useEffect, useState } from 'react';
import { Modal, OpaqueColorValue, Platform, StyleProp, Text, View, ViewStyle } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

interface DatePickerModalActions {
  onPressOk(date: Date): void
  openModal(): void
  closeModal(): void
  onChange?(e: Event, date: Date | undefined): void
}

interface DatePickerModalProps extends DatePickerModalActions {
  defaultValue: Date
  isVisible: boolean
}

const DatePickerAndroid: React.FC<DatePickerModalProps> = ({ defaultValue, isVisible, onPressOk, closeModal }) => {
  const [date, setDate] = useState<Date>(defaultValue);

  useEffect(() => {
    onPressOk(date);
  }, [date]);
  return (
    isVisible ? (
      <DateTimePicker
      style={{ padding: 20 }}
      testID="dateTimePicker"
      value={date}
      mode='date'
      is24Hour={true}
      display='spinner'
      onChange={(e, selectedDate) => {
        setDate(selectedDate || date);
        closeModal();
      }}
      timeZoneOffsetInMinutes={-180}
      textColor='#8257e5'/>
    ) : null
  )
};

const DatePickerIOS: React.FC<DatePickerModalProps> = ({ defaultValue, isVisible, onPressOk, closeModal }) => {
  const [date, setDate] = useState<Date>(defaultValue);
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={closeModal}>
      <View style={{
        flex: 1,
        justifyContent: "center",
        marginTop: 22
      }}>
        <View style={{
          margin: 20,
          backgroundColor: '#e5e5e5',
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          opacity: 0.97,
          elevation: 5
        }}>
          <DateTimePicker
            style={{ padding: 20 }}
            testID="dateTimePicker"
            value={date}
            mode='date'
            is24Hour={true}
            display='spinner'
            locale='pt-BR'
            onChange={(e, selectedDate) => {
              setDate(selectedDate || date);
            }}
            timeZoneOffsetInMinutes={-180}
            textColor='#8257e5'/>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopColor: '#6842c2', borderTopWidth: 1, opacity: 0.5 }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={closeModal} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'Archivo_700Bold', fontSize: 16, color: '#ef233c' }}>
                    Cancelar
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                  onPressOk(date);
                  closeModal();
                }} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'Archivo_700Bold', fontSize: 16, color: '#04d361' }}>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>
    </Modal>
  )
}

const DatePickerModal: React.FC<DatePickerModalProps> = ({ defaultValue, isVisible, openModal, closeModal, onPressOk }) => {
  if(Platform.OS === 'android') return (
    <DatePickerAndroid 
    isVisible={isVisible}
    defaultValue={defaultValue}
    openModal={openModal}
    closeModal={closeModal}
    onPressOk={onPressOk}/>
  )
  return (
    <DatePickerIOS 
    isVisible={isVisible} 
    defaultValue={defaultValue} 
    openModal={openModal} 
    closeModal={closeModal} 
    onPressOk={onPressOk}/>
  )
}

interface DatePickerSelectProps {
  placeholderText?: String
  placeholderTextColor?: string
  defaultValue?: Date
  onChangeDate(date: Date): void
  selectStyle?: StyleProp<ViewStyle>
  iconSize?: number | undefined
  iconColor?: string | typeof OpaqueColorValue | undefined
}

const DatePickerSelect: React.FC<DatePickerSelectProps> = ({ placeholderText, placeholderTextColor, defaultValue, onChangeDate, iconSize, iconColor, selectStyle }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [time, setTime] = useState<Date>(defaultValue || new Date());
  
  return (
    <>
      <DatePickerModal isVisible={modalVisible} defaultValue={time} openModal={() => setModalVisible(true)} onPressOk={(date) => {
        setTime(date)
        onChangeDate(date)
      }} closeModal={() => setModalVisible(false)} />
      <TouchableOpacity style={selectStyle} onPress={() => setModalVisible(true)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: placeholderTextColor }}>
            {
              placeholderText && !defaultValue && !time ? placeholderText
              : placeholderText && !defaultValue && time ? time?.toLocaleDateString()
              : defaultValue?.toLocaleDateString()}
          </Text>
          <AntDesign name="down" size={iconSize ? iconSize : 12} color={iconColor} style={{ transform: [{ rotate: modalVisible ? '180deg' : '0deg' }] }} />
        </View>
      </TouchableOpacity>
    </>
  )
}

export default DatePickerSelect;