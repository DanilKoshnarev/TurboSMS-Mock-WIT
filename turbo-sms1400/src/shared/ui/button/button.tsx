import { TouchableOpacity, Text } from "react-native";
import { IButtonProps } from "./button.types";
import { styles } from "./button.styles"

// <Button label></Button>
export function Button(props: IButtonProps){

    const { label, disabled } = props
    return (
        <TouchableOpacity
            // disabled - true/false, undefined
            // 0 - false, 1 - true, '3ewqdada' - true, '' - false... 
            // false - false, undefined - false, null - false
            // if (disabled) {styles.disabled} else { undefined }
            style={[styles.button, disabled ? styles.disabled : undefined]} 
            disabled={disabled}
            {...props} // spread operator
            // onChange={onChange}
        >
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}
// TouchableOpacity
// TouchableWithoutFeedback
// Pressable


