import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getMySalary } from "../../api/salaryApi";

export default function SalaryScreen() {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    fetchSalary();
  }, []);

  const fetchSalary = async () => {
    try {
      const data = await getMySalary();
      setSalaries(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>급여 조회</Text>
      <FlatList
        data={salaries}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.month}>
              {item.year}년 {item.month}월
            </Text>
            <View style={styles.row}>
              <Text style={styles.label}>총 근무시간</Text>
              <Text style={styles.value}>{item.totalHours}시간</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>기본급</Text>
              <Text style={styles.value}>
                {item.baseSalary.toLocaleString()}원
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>주휴수당</Text>
              <Text style={styles.value}>
                {item.weeklyHolidayPay.toLocaleString()}원
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>최종 급여</Text>
              <Text style={[styles.value, styles.total]}>
                {item.totalSalary.toLocaleString()}원
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>급여 내역이 없습니다.</Text>
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
  month: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#3498db",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  label: { fontSize: 13, color: "#999" },
  value: { fontSize: 13, color: "#333" },
  total: { fontWeight: "bold", color: "#2ecc71" },
  empty: { textAlign: "center", color: "#999", fontSize: 14, marginTop: 40 },
});
