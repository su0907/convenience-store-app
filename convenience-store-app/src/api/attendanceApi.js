import api from "./axios";

export const clockIn = async (latitude, longitude) => {
  const response = await api.post(
    `/api/attendance/clock-in?latitude=${latitude}&longitude=${longitude}`,
  );
  return response.data;
};

export const clockOut = async (latitude, longitude) => {
  const response = await api.post(
    `/api/attendance/clock-out?latitude=${latitude}&longitude=${longitude}`,
  );
  return response.data;
};

export const getMyAttendance = async () => {
  const response = await api.get("/api/attendance/my");
  return response.data;
};
