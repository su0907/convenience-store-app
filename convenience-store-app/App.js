import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import LoginScreen from "./src/screens/auth/LoginScreen";
import AttendanceScreen from "./src/screens/attendance/AttendanceScreen";
import ScheduleScreen from "./src/screens/schedule/ScheduleScreen";
import SalaryScreen from "./src/screens/salary/SalaryScreen";
import HandoverScreen from "./src/screens/handover/HandoverScreen";
import NoticeScreen from "./src/screens/notice/NoticeScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3498db",
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tab.Screen
        name="출퇴근"
        component={AttendanceScreen}
        options={{ tabBarIcon: () => <Text>🕐</Text> }}
      />
      <Tab.Screen
        name="스케줄"
        component={ScheduleScreen}
        options={{ tabBarIcon: () => <Text>📅</Text> }}
      />
      <Tab.Screen
        name="급여"
        component={SalaryScreen}
        options={{ tabBarIcon: () => <Text>💰</Text> }}
      />
      <Tab.Screen
        name="인수인계"
        component={HandoverScreen}
        options={{ tabBarIcon: () => <Text>📝</Text> }}
      />
      <Tab.Screen
        name="공지사항"
        component={NoticeScreen}
        options={{ tabBarIcon: () => <Text>📢</Text> }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
