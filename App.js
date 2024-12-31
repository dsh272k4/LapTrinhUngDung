import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,

} from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    console.log('Số điện thoại:', phoneNumber);
  };
  const Separator = () => <View style={styles.separator} />;
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        {/* Tiêu đề */}
        <Text style={styles.header}>Đăng nhập</Text>
        <Separator />
        {/* Phần nhập số điện thoại */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nhập số điện thoại</Text>
          <Text style={styles.subLabel}>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại của bạn"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Separator />
        </View>

        {/* Nút Tiếp tục */}
        <TouchableOpacity
          style={[
            styles.button,
            phoneNumber.length === 0 && styles.buttonDisabled,
          ]}
          onPress={handleContinue}
          disabled={phoneNumber.length === 0}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',

    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  button: {
    height: 48,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default LoginScreen;