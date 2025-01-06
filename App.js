import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  // State để lưu giá trị của TextInput
  const [phoneNumber, setPhoneNumber] = useState('');

  // Hàm xử lý khi nhấn nút
  const handlePress = () => {
    Alert.alert(`Số bạn đã nhập là: ${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Đăng Nhập</Text>
      </View>
      <Separator />
      <View style={styles.body}>
        <Text style={{ fontSize: 18, marginBottom: 25 }}>Nhập số điện thoại</Text>
        <Text style={{ fontSize: 14, marginBottom: 10 }}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={9}
          placeholder="Nhập số điện thoại"
          value={phoneNumber} // Liên kết giá trị TextInput với state
          onChangeText={(text) => setPhoneNumber(text)} // Cập nhật state khi nhập
        />
        <Separator />
      </View>

      <View style={styles.footer}>
        <Button
          title="Tiếp Tục"
          onPress={handlePress}
          disabled={!phoneNumber} // Vô hiệu hóa nếu chưa nhập
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Đẩy các phần tử ra xa nhau
    paddingHorizontal: 16,
  },
  head: {
    marginTop: 16,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    borderColor: '#ccc',

    borderRadius: 5,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  footer: {
    marginBottom: 16, // Tạo khoảng cách với đáy màn hình
  },
});
