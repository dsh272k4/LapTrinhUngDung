import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Định nghĩa kiểu dữ liệu cho mỗi mục thông báo
type ItemData = {
  id: number;
  step: string;
  message: string;
  time: string;
  icon: keyof typeof Icon.glyphMap; // Loại biểu tượng từ react-native-vector-icons
};

// Dữ liệu thông báo
const DATA: ItemData[] = [
  {
    id: 1,
    step: "Bước 1 Xác định nhu cầu khách hàng",
    message: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
    time: "20/08/2020, 06:00",
    icon: "check-circle",
  },
  {
    id: 2,
    step: "Bạn có khách hàng mới!",
    message: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
    time: "20/08/2020, 06:00",
    icon: "group",
  },
  {
    id: 3,
    step: "Khách hàng được chia sẻ bị trùng",
    message: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.",
    time: "20/08/2020, 06:00",
    icon: "group",
  },
  {
    id: 4,
    step: "Khách hàng được thêm bị trùng",
    message: "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.",
    time: "20/08/2020, 06:00",
    icon: "group",
  },
  {
    id: 5,
    step: "Công việc sắp đến hạn trong hôm nay",
    message: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
    time: "20/08/2020, 06:00",
    icon: "check-circle",
  },
  {
    id: 6,
    step: "Công việc đã quá hạn",
    message: "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
    time: "20/08/2020, 06:00",
    icon: "check-circle",
  },
];

const App = () => {
  const renderItem = ({ item }: { item: ItemData }) => (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        <Icon name={item.icon} size={24} color="#007bff" />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.stepText}>{item.step}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Thông báo</Text>

      {/* Notification List */}
      <FlatList
        data={DATA}  // Sử dụng DATA đã được định nghĩa
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textWrapper: {
    flex: 1,
  },
  stepText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  messageText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  timeText: {
    fontSize: 12,
    color: '#999',
  },
});

export default App;
