import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

//form-validation
import * as Yup from 'yup'
const PasswordSchema = Yup.object().shape({
  passwordLength : Yup.number().required('Length is required').min(4,'Should be min of 4 characters').max(16,'Should be max of 16 Characters'),
});
export default function App() {
  const [passworder, setPassworder] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [lowerCase, setLowerCase ]= useState(true);
  const [upperCase, setUpperCase ]= useState(false);
  const [numbers, setNumbers ]= useState(false);
  const [symbols, setSymbols ]= useState(false);

  const generatedPasswordString = (passwordLength : number) => {
    //
  }
  const createPassword = (characters : string, passwordLength : number) => {
    //
  }
  const resetPassword = () => {
    //
  }


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})