import React, { useContext, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { collection, addDoc } from 'firebase/firestore';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';

import { db } from '../core/Config';
import { barcodeContext, cameraContext } from '../context';

export default function AddItemFormik() {
  return (
    <Formik
      initialValues={{
        category: 'dairy',
        expiration_date: moment().format('MMM Do YY'),
        food_item: '',
        quantity: '1',
        user_id: '1',
      }}
      onSubmit={(values) => {
        const colRef = collection(db, 'FoodItems');
        addDoc(colRef, values);
      }}
    >
      {({ handleSubmit, setFieldValue, handleChange, values }) => (
        <AddItem
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
        />
      )}
    </Formik>
  );
}

const AddItem = (props) => {
  const { barcodeData } = useContext(barcodeContext);
  const { cameraData } = useContext(cameraContext);
  const { setFieldValue, handleSubmit, handleChange, values } = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [selectedValue, setSelectedValue] = useState('all');
  const foodGroups = [
    '🍎 fruit',
    '🥦 vegetables',
    '🥩 meat',
    '🧀 dairy',
    '🍞 grains',
    '🐟 fish',
  ];
  console.log('live from addItem page: ', cameraData);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleFoodGroupPress = (foodGroupsName) => {
    setFieldValue('category', foodGroupsName);
    setSelectedValue(foodGroupsName);
  };

  const handleConfirm = (newDate) => {
    setFieldValue('expiration_date', moment(newDate).format('MMM Do YY'));
    setExpiryDate(newDate);
    hideDatePicker();
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.container}>
            <>
              <TextInput
                style={styles.input}
                placeholder={barcodeData}
                onChangeText={handleChange('food_item')}
                value={values.food_item}
              />

              <Picker
                style={{ height: 50, width: 175, paddinghorizontal: 20 }}
                selectedValue={selectedValue}
                onValueChange={handleFoodGroupPress}
              >
                {foodGroups.map((item) => {
                  return <Picker.Item key={item} label={item} value={item} />;
                })}
              </Picker>

              <Text style={styles.input} onPress={showDatePicker}>
                {moment(expiryDate).format('MMM Do YY')}
              </Text>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />

              <TextInput
                style={styles.input}
                placeholder="Add quantity"
                onChangeText={handleChange('quantity')}
                value={values.quantity}
              />
              <Button title="Add Item" color="maroon" onPress={handleSubmit} />
            </>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
