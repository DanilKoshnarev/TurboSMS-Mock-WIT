import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        gap: 32,
        padding: 16
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 24
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60
    },
    avatarPlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'dashed'
    }
})