import { Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen  = ({ userNumber, onRestart }) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game is Over!</Text>
            <Text style={styles.text}>Number was : {userNumber}</Text>
            <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;