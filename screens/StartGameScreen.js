import {
	View,
	TextInput,
	StyleSheet,
	Alert,
	Text,
	useWindowDimensions,
	KeyboardAvoidingView, //its for IOS mainly
	ScrollView, //its for IOS mainly
} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../utils/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ pickNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState("");

	const { width, height } = useWindowDimensions();
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
		pickNumber(chosenNumber);
	};

	const marginTopDistance = height < 400 ? 30 : 100;

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior="position">
				<View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
					<Title>Opponent's Guess</Title>
					<Card>
						<InstructionText>Enter a Number</InstructionText>
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
								<PrimaryButton onPress={confirmInputHandler}>
									Confirm
								</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default StartGameScreen;

//const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		// marginTop: deviceHeight < 400 ? 30 : 100,
		alignItems: "center",
	},

	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		fontWeight: "bold",
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
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
