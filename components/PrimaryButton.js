import { View, Text, Pressable, StyleSheet } from "react-native";
const PrimaryButton = ({ children, onPress }) => {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				android_ripple={{ color: "#640233" }}
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
				onPress={onPress}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: "#72063c",
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	button: {},
	buttonText: {
		textAlign: "center",
		color: "white",
	},

	// ripple effect for ios
	pressed: {
		opacity: 0.75,
	},
});
