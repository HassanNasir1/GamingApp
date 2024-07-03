import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
	return (
		<View style={styles.rootContainer}>
			<Title>Game Over!</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/success.png")}
				/>
			</View>
			<Text style={styles.summaryText}>
				Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
				guess the number <Text style={styles.highlight}>{userNumber}</Text>{" "}
			</Text>
			{/* <Text style={styles.title}>The Game is Over!</Text>
			<Text style={styles.text}>Number was : {userNumber}</Text> */}
			<PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
		</View>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		alignItems: "center",
		justifyContent: "center",
	},
	imageContainer: {
		width: 300,
		height: 300,
		overflow: "hidden",
		margin: 36,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: Colors.primary800,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	title: {
		fontSize: 24,
		color: "white",
		textAlign: "center",
		borderColor: "white",
		borderWidth: 2,
		padding: 12,
	},
	summaryText: {
		fontFamily: "open-sans",
		fontSize: 24,
		textAlign: "center",
		marginVertical: 24,
	},
	highlight: {
		color: Colors.primary500,
		fontFamily: "open-sans-bold",
	},
});
