import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getMySchedule } from "../../api/scheduleApi";

export default function ScheduleScreen() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      const data = await getMySchedule();
      setSchedules(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>스케줄 확인</Text>
      <FlatList
        data={schedules}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.date}>{item.workDate}</Text>
            <Text style={styles.time}>
              {item.startTime} ~ {item.endTime}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>등록된 스케줄이 없습니다.</Text>
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
  date: { fontSize: 15, fontWeight: "bold", color: "#3498db", marginBottom: 6 },
  time: { fontSize: 14, color: "#555" },
  empty: { textAlign: "center", color: "#999", fontSize: 14, marginTop: 40 },
});
