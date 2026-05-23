import api from "./axios";

export const clockIn = async () => {
  const response = await api.post("/api/attendance/clock-in");
  return response.data;
};

export const clockOut = async () => {
  const response = await api.post("/api/attendance/clock-out");
  return response.data;
};

export const getMyAttendance = async () => {
  const response = await api.get("/api/attendance/my");
  return response.data;
};
