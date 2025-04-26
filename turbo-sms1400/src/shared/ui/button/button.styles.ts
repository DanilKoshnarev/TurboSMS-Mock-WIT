import { StyleSheet } from "react-native"
import { COLORS } from '../colors'

export const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 50,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bisqueSecondary,
    },
    disabled: {
        borderWidth: 2,
        borderColor: COLORS.bisqueSecondary,
        backgroundColor: COLORS.white,
        opacity: 0.5
    }
})