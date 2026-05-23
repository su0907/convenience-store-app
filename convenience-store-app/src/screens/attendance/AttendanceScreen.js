import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import { clockIn, clockOut, getMyAttendance } from "../../api/attendanceApi";

export default function AttendanceScreen() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const data = await getMyAttendance();
      setRecords(data);
      const working = data.some((r) => r.clockOut === null);
      setIsWorking(working);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClockIn = async () => {
    setLoading(true);
    try {
      await clockIn();
      Alert.alert("출근", "출근이 완료되었습니다.");
      fetchAttendance();
    } catch (err) {
      Alert.alert("오류", "이미 출근 중입니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleClockOut = async () => {
    setLoading(true);
    try {
      await clockOut();
      Alert.alert("퇴근", "퇴근이 완료되었습니다.");
      fetchAttendance();
    } catch (err) {
      Alert.alert("오류", "출근 기록이 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (dateTime) => {
    if (!dateTime) return "-";
    return new Date(dateTime).toLocaleString("ko-KR");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>출퇴근 관리</Text>

      <View style={styles.btnBox}>
        <TouchableOpacity
          style={[styles.btn, styles.clockInBtn, isWorking && styles.disabled]}
          onPress={handleClockIn}
          disabled={isWorking || loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.btnText}>출근</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            styles.clockOutBtn,
            !isWorking && styles.disabled,
          ]}
          onPress={handleClockOut}
          disabled={!isWorking || loading}
        >
          <Text style={styles.btnText}>퇴근</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusBox}>
        <Text style={styles.statusText}>
          현재 상태 :
          <Text style={{ color: isWorking ? "#2ecc71" : "#e74c3c" }}>
            {isWorking ? " 근무중" : " 퇴근"}
          </Text>
        </Text>
      </View>

      <Text style={styles.sectionTitle}>출퇴근 기록</Text>
      <FlatList
        data={records}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.date}>{item.workDate}</Text>
            <View style={styles.timeRow}>
              <Text style={styles.timeLabel}>출근</Text>
              <Text style={styles.timeValue}>
                {formatDateTime(item.clockIn)}
              </Text>
            </View>
            <View style={styles.timeRow}>
              <Text style={styles.timeLabel}>퇴근</Text>
              <Text style={styles.timeValue}>
                {formatDateTime(item.clockOut)}
              </Text>
            </View>
            {item.workHours != null && (
              <Text style={styles.hours}>근무시간 : {item.workHours}시간</Text>
            )}
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>출퇴근 기록이 없습니다.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    marginTop: 50,
  },
  btnBox: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  btn: {
    flex: 1,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  clockInBtn: {
    backgroundColor: "#2ecc71",
  },
  clockOutBtn: {
    backgroundColor: "#e74c3c",
  },
  disabled: {
    opacity: 0.4,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  statusBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  statusText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "bold",
  },
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
  date: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3498db",
    marginBottom: 8,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  timeLabel: {
    fontSize: 13,
    color: "#999",
  },
  timeValue: {
    fontSize: 13,
    color: "#333",
  },
  hours: {
    fontSize: 13,
    color: "#2ecc71",
    fontWeight: "bold",
    marginTop: 6,
  },
  empty: {
    textAlign: "center",
    color: "#999",
    fontSize: 14,
    marginTop: 40,
  },
});
