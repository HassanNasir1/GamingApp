import { StyleSheet, View } from "react-native";
import Colors from "../../utils/colors";

const Card = ({ children }) => {
	return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
	card: {
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		marginTop: 36,
		backgroundColor: Colors.primary800,
		marginHorizontal: 24,
		borderRadius: 8,
		elevation: 4, //for shadow it will only works on android not on ios
		// for ios use these 4 properties
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
});
