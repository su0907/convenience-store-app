import api from "./axios";

export const getTodayHandovers = async () => {
  const response = await api.get("/api/handover/today");
  return response.data;
};

export const createHandover = async (content) => {
  const response = await api.post("/api/handover", { content });
  return response.data;
};
