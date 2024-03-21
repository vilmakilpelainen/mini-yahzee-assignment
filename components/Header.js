import { View, Text } from "react-native";
import style from '../style/style';

export default Header = () => {
    return (
        <View style={style.header}>
            <Text style={style.title}>
                Mini-Yahtzee
            </Text>
        </View>
    )
}