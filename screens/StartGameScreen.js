import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

const StartGameScreen = (props) => {
	const [enteredNumber, setEnteredNumber] = useState("");

	const numberInputHandler = (enteredText) => {
		setEnteredNumber(enteredText);
	};

	const resetInputHandler = () => {
		setEnteredNumber("");
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert("Invalid number", "please enter a number between 1 and 99.", [
				{ text: "Okay", style: "destructive", onPress: resetInputHandler },
			]);
			return;
		}
		console.log(chosenNumber);
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				keyboardType="number-pad"
				maxLength={2}
				//below props are not needed but still I want to show it can be done
				// autoCapitalize="none"
				// autoCorrect={false}
				onChangeText={numberInputHandler}
				value={enteredNumber}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		marginTop: 100,
		backgroundColor: "#3b021f",
		marginHorizontal: 24,
		borderRadius: 8,
		elevation: 4, //for shadow it will only works on android not on ios
		// for ios use these 4 properties
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		fontWeight: "bold",
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		marginVertical: 8,
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
});
