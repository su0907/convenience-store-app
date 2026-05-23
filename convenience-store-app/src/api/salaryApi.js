import api from "./axios";

export const getMySalary = async () => {
  const response = await api.get("/api/salary/my");
  return response.data;
};
