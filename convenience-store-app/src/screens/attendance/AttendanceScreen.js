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
import * as Location from "expo-location";
import MapView, { Marker, Circle } from "react-native-maps";
import { clockIn, clockOut, getMyAttendance } from "../../api/attendanceApi";
import api from "../../api/axios";

const STORE_RADIUS = 500;

export default function AttendanceScreen() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [storeLocations, setStoreLocations] = useState([]);
  const [isWithinRange, setIsWithinRange] = useState(false);

  useEffect(() => {
    fetchAttendance();
    fetchStoreLocations();
  }, []);

  useEffect(() => {
    if (storeLocations.length > 0) {
      startLocationTracking();
    }
  }, [storeLocations]);

  const fetchStoreLocations = async () => {
    try {
      const response = await api.get("/api/store/location");
      setStoreLocations(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const startLocationTracking = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("권한 오류", "위치 권한이 필요합니다.");
      return;
    }

    // 실시간 위치 추적
    await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 3000,
        distanceInterval: 10,
      },
      (location) => {
        const coords = location.coords;
        setCurrentLocation(coords);

        // 반경 확인
        if (storeLocations.length > 0) {
          const within = storeLocations.some((store) => {
            const distance = calculateDistance(
              coords.latitude,
              coords.longitude,
              store.latitude,
              store.longitude,
            );
            return distance <= STORE_RADIUS;
          });
          setIsWithinRange(within);
        }
      },
    );
  };

  // Haversine 공식
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371000;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

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
      if (!currentLocation) {
        Alert.alert(
          "오류",
          "위치를 가져오는 중입니다. 잠시 후 다시 시도해주세요.",
        );
        return;
      }
      await clockIn(currentLocation.latitude, currentLocation.longitude);
      Alert.alert("출근", "출근이 완료되었습니다.");
      fetchAttendance();
    } catch (err) {
      Alert.alert("오류", "편의점 반경 500m 이내에서만 출근할 수 있습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleClockOut = async () => {
    setLoading(true);
    try {
      if (!currentLocation) {
        Alert.alert(
          "오류",
          "위치를 가져오는 중입니다. 잠시 후 다시 시도해주세요.",
        );
        return;
      }
      await clockOut(currentLocation.latitude, currentLocation.longitude);
      Alert.alert("퇴근", "퇴근이 완료되었습니다.");
      fetchAttendance();
    } catch (err) {
      Alert.alert("오류", "편의점 반경 500m 이내에서만 퇴근할 수 있습니다.");
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

      {/* 지도 */}
      {currentLocation && (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            showsUserLocation={true}
          >
            {storeLocations.map((store) => (
              <React.Fragment key={store.id}>
                <Marker
                  coordinate={{
                    latitude: store.latitude,
                    longitude: store.longitude,
                  }}
                  title={store.name}
                  pinColor="#3498db"
                />
                <Circle
                  center={{
                    latitude: store.latitude,
                    longitude: store.longitude,
                  }}
                  radius={STORE_RADIUS}
                  strokeColor={isWithinRange ? "#2ecc71" : "#e74c3c"}
                  fillColor={
                    isWithinRange
                      ? "rgba(46,204,113,0.15)"
                      : "rgba(231,76,60,0.15)"
                  }
                  strokeWidth={2}
                />
              </React.Fragment>
            ))}
          </MapView>

          {/* 반경 상태 표시 */}
          <View
            style={[
              styles.rangeStatus,
              { backgroundColor: isWithinRange ? "#2ecc71" : "#e74c3c" },
            ]}
          >
            <Text style={styles.rangeText}>
              {isWithinRange ? "✅ 반경 이내" : "❌ 반경 밖"}
            </Text>
          </View>
        </View>
      )}

      {/* 출퇴근 버튼 */}
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
    marginBottom: 12,
    marginTop: 50,
  },
  mapContainer: {
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
    position: "relative",
  },
  map: {
    flex: 1,
  },
  rangeStatus: {
    position: "absolute",
    bottom: 10,
    left: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  rangeText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
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
