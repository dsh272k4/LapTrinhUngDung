import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (phoneRegex.test(phone)) {
      setErrorMessage('');
    } else {
      setErrorMessage('Số điện thoại không hợp lệ!');
    }
  };

  const handlePress = () => {
    console.log("handlePress called, phoneNumber:", phoneNumber, "errorMessage:", errorMessage);
    if (!errorMessage && phoneNumber) {
      navigation.replace('Home', { phoneNumber });
    } else {
      Alert.alert('Vui lòng nhập số điện thoại hợp lệ!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Đăng Nhập</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.subtitle}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={10}
          placeholder="Nhập số điện thoại"
          value={phoneNumber}
          onChangeText={(text) => {
            setPhoneNumber(text);
            validatePhoneNumber(text);
          }}
        />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </View>

      <View style={styles.footer}>
        <Button title="Tiếp Tục" onPress={handlePress} disabled={!phoneNumber || !!errorMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  head: {
    marginTop: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 25,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  footer: {
    marginBottom: 16,
  },
});
