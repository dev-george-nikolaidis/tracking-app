// libraries
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

//local
import { StyleSheet, Text, View } from "react-native";
import ManageExpenses from "./screens/ManageExpense";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { GlobalStyles } from "./constants/styles";

// we create native stack for routing
const Stack = createNativeStackNavigator();
// we create  bottom buttons for navigation
const BottomTabs = createBottomTabNavigator();

// Tabs component
function ExpensesOverview() {
	/* Routing ,the top register screen showing fist */
	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: GlobalStyles.colors.primary500,
				},
				headerTintColor: "#fff",
				tabBarStyle: {
					backgroundColor: GlobalStyles.colors.primary500,
				},
				tabBarActiveTintColor: GlobalStyles.colors.accent500,
			}}
		>
			<BottomTabs.Screen
				name="RecentExpenses"
				component={RecentExpenses}
				options={{
					title: "Recent Expenses",
					tabBarLabel: "Recent",
					tabBarIcon: ({ color, size }) => {
						return (
							<Ionicons
								name="hourglass"
								size={size}
								color={color}
							/>
						);
					},
				}}
			/>
			<BottomTabs.Screen
				name="AllExpenses"
				component={AllExpenses}
				options={{
					title: "All Expenses",
					tabBarLabel: "All",
					tabBarIcon: ({ color, size }) => {
						return (
							<Ionicons
								name="calendar"
								size={size}
								color={color}
							/>
						);
					},
				}}
			/>
		</BottomTabs.Navigator>
	);
}

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			{/* Routing ,the top register screen showing fist */}
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="ExpensesOverview"
						component={ExpensesOverview}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="ManageExpense"
						component={ManageExpenses}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
