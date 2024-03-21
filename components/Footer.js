import { View, Text } from "react-native"
import style from '../style/style'

export default Footer = () => {
    return (
        <View style={style.footer}>
            <Text style={style.author}>
                Author: Vilma Kilpeläinen
            </Text>
        </View>
    )
}