import api from "./axios";

export const getMySchedule = async () => {
  const response = await api.get("/api/schedule/my");
  return response.data;
};
