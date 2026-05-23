import api from "./axios";

export const getAllNotices = async () => {
  const response = await api.get("/api/notice");
  return response.data;
};
