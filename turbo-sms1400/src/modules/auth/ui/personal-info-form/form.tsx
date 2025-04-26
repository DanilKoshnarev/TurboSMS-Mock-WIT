import { Controller, useForm } from "react-hook-form"
import { IPersonalInfo } from "../../types"
import { View, Image, TouchableOpacity, Text } from "react-native"
import { Input } from "../../../../shared/ui/input"
import { Button } from "../../../../shared/ui/button"
import { UserIcon } from "../../../../shared/ui/icons"
import { styles } from "./form.styles"
import * as ImagePicker from 'expo-image-picker'
import { useState } from "react"

export function PersonalInfoForm(){
    const { control, handleSubmit, setValue } = useForm<IPersonalInfo>()
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

    async function pickImage() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
            base64: true,
        })

        if (!result.canceled && result.assets[0].base64) {
            const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`
            setAvatarPreview(base64Image)
            setValue('avatar', base64Image)
        }
    }

    function onSubmit(data: IPersonalInfo){
        console.log(data)
    }

    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
                    {avatarPreview ? (
                        <Image source={{ uri: avatarPreview }} style={styles.avatar} />
                    ) : (
                        <View style={styles.avatarPlaceholder}>
                            <Text>Select Avatar</Text>
                        </View>
                    )}
                </TouchableOpacity>

                <Controller 
                control={control} 
                name='firstName'
                rules={{
                    required:{
                        value:true,
                        message:"First name is required"
                }}}
                render={
                    ({ field, fieldState })=>(
                        <Input 
                        value={field.value} 
                        onChange={field.onChange} 
                        placeholder="John" 
                        label="First Name" 
                        error={fieldState.error?.message}
                        leftIcon={<UserIcon width={36} height={35}/>}/>
                    )
                }/>

                <Controller 
                control={control} 
                name='lastName'
                rules={{
                    required:{
                        value:true,
                        message:"Last name is required"
                }}}
                render={
                    ({ field, fieldState })=>(
                        <Input 
                        value={field.value} 
                        onChange={field.onChange} 
                        placeholder="Doe" 
                        label="Last Name" 
                        error={fieldState.error?.message}
                        leftIcon={<UserIcon width={36} height={35}/>}/>
                    )
                }/>

                <Controller 
                control={control} 
                name='phoneNumber'
                rules={{
                    required:{
                        value:true,
                        message:"Phone number is required"
                }}}
                render={
                    ({ field, fieldState })=>(
                        <Input 
                        value={field.value} 
                        onChange={field.onChange} 
                        placeholder="+1234567890" 
                        label="Phone Number" 
                        error={fieldState.error?.message}/>
                    )
                }/>
            </View>
            <View>
                <Button onPress={handleSubmit(onSubmit)} label="Complete Registration"/>
            </View>
        </View>
    )
}