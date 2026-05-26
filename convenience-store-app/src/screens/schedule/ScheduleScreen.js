import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { getMySchedule } from "../../api/scheduleApi";

export default function ScheduleScreen() {
  const [schedules, setSchedules] = useState([]);
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      const data = await getMySchedule();
      setSchedules(data);

      // 캘린더에 표시할 날짜 마킹
      const marked = {};
      data.forEach((s) => {
        marked[s.workDate] = {
          marked: true,
          dotColor: "#3498db",
        };
      });
      setMarkedDates(marked);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    const found = schedules.find((s) => s.workDate === day.dateString);
    setSelectedSchedule(found || null);

    // 선택된 날짜 하이라이트
    setMarkedDates((prev) => {
      const updated = { ...prev };
      // 이전 선택 초기화
      Object.keys(updated).forEach((key) => {
        if (updated[key].selected) {
          updated[key] = {
            ...updated[key],
            selected: false,
          };
        }
      });
      // 현재 선택 표시
      updated[day.dateString] = {
        ...updated[day.dateString],
        selected: true,
        selectedColor: "#3498db",
      };
      return updated;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>스케줄 확인</Text>

      <View style={styles.calendarBox}>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={markedDates}
          monthFormat={"yyyy년 MM월"}
          theme={{
            todayTextColor: "#e74c3c",
            selectedDayBackgroundColor: "#3498db",
            arrowColor: "#3498db",
            dotColor: "#3498db",
            textDayFontSize: 14,
            textMonthFontSize: 16,
            textMonthFontWeight: "bold",
          }}
        />
      </View>

      {selectedDate !== "" && (
        <View style={styles.infoBox}>
          <Text style={styles.selectedDate}>{selectedDate}</Text>
          {selectedSchedule ? (
            <View style={styles.scheduleBox}>
              <Text style={styles.scheduleText}>
                🕐 {selectedSchedule.startTime} ~ {selectedSchedule.endTime}
              </Text>
            </View>
          ) : (
            <Text style={styles.noSchedule}>등록된 스케줄이 없습니다.</Text>
          )}
        </View>
      )}
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
  calendarBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedDate: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 12,
  },
  scheduleBox: {
    backgroundColor: "#ebf5fb",
    borderRadius: 8,
    padding: 12,
  },
  scheduleText: {
    fontSize: 16,
    color: "#3498db",
    fontWeight: "bold",
  },
  noSchedule: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },
});
