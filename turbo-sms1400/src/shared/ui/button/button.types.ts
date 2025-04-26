import { TouchableOpacityProps } from "react-native"

// extends - ключове слово, що дозволяє успадкувати всі властивості з іншого інтерфейсу
export interface IButtonProps extends TouchableOpacityProps {
    label: string
    disabled?: boolean
}