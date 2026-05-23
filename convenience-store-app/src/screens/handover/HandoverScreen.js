import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { getTodayHandovers, createHandover } from "../../api/handoverApi";

export default function HandoverScreen() {
  const [handovers, setHandovers] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchHandovers();
  }, []);

  const fetchHandovers = async () => {
    try {
      const data = await getTodayHandovers();
      setHandovers(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async () => {
    if (!content.trim()) {
      Alert.alert("오류", "내용을 입력해주세요.");
      return;
    }
    try {
      await createHandover(content);
      setContent("");
      Alert.alert("완료", "인수인계가 등록되었습니다.");
      fetchHandovers();
    } catch (err) {
      Alert.alert("오류", "등록에 실패했습니다.");
    }
  };

  const formatDateTime = (dateTime) => {
    if (!dateTime) return "-";
    return new Date(dateTime).toLocaleString("ko-KR");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>인수인계</Text>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="인수인계 내용을 입력하세요"
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={3}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitText}>등록</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>오늘의 인수인계</Text>
      <FlatList
        data={handovers}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.userName}>{item.userName}</Text>
              <Text style={styles.time}>{formatDateTime(item.createdAt)}</Text>
            </View>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>오늘의 인수인계가 없습니다.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f6fa", padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    marginTop: 50,
  },
  inputBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    marginBottom: 10,
    textAlignVertical: "top",
  },
  submitBtn: {
    backgroundColor: "#3498db",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  submitText: { color: "white", fontSize: 15, fontWeight: "bold" },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  userName: { fontSize: 14, fontWeight: "bold", color: "#2c3e50" },
  time: { fontSize: 12, color: "#999" },
  content: { fontSize: 14, color: "#555", lineHeight: 20 },
  empty: { textAlign: "center", color: "#999", fontSize: 14, marginTop: 40 },
});
