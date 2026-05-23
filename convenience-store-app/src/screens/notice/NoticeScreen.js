import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getAllNotices } from "../../api/noticeApi";

export default function NoticeScreen() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const data = await getAllNotices();
      setNotices(data);
    } catch (err) {
      console.error(err);
    }
  };

  const formatDateTime = (dateTime) => {
    if (!dateTime) return "-";
    return new Date(dateTime).toLocaleString("ko-KR");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>공지사항</Text>
      <FlatList
        data={notices}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.noticeTitle}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <View style={styles.footer}>
              <Text style={styles.author}>{item.userName}</Text>
              <Text style={styles.time}>{formatDateTime(item.createdAt)}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>공지사항이 없습니다.</Text>
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
  noticeTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },
  content: { fontSize: 14, color: "#555", lineHeight: 20, marginBottom: 10 },
  footer: { flexDirection: "row", justifyContent: "space-between" },
  author: { fontSize: 12, color: "#3498db", fontWeight: "bold" },
  time: { fontSize: 12, color: "#999" },
  empty: { textAlign: "center", color: "#999", fontSize: 14, marginTop: 40 },
});
