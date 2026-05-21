import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToken = async (token) => {
  await AsyncStorage.setItem("token", token);
};

export const getToken = async () => {
  return await AsyncStorage.getItem("token");
};

export const removeToken = async () => {
  await AsyncStorage.removeItem("token");
};

export const saveUserInfo = async (name, role) => {
  await AsyncStorage.setItem("name", name);
  await AsyncStorage.setItem("role", role);
};

export const getUserInfo = async () => {
  const name = await AsyncStorage.getItem("name");
  const role = await AsyncStorage.getItem("role");
  return { name, role };
};

export const logout = async () => {
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("name");
  await AsyncStorage.removeItem("role");
};
