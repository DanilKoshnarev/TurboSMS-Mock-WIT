import { Controller, useForm } from "react-hook-form"
import { IRegistration } from "../../types"
import { View } from "react-native"
import { Input } from "../../../../shared/ui/input"
import { Button } from "../../../../shared/ui/button"
import { UserIcon } from "../../../../shared/ui/icons"
import { styles } from "./form.styles"

export function RegistrationForm(){
    const { control, handleSubmit } = useForm<IRegistration>()

    function onSubmit(data: IRegistration){
        console.log(data)
    }

    return(
        <View style={styles.container}>
            <View>
                <Controller 
                control={control} 
                name='username'
                rules={{
                    required:{
                        value:true,
                        message:"Username is required"
                }}}
                render={
                    ({ field, fieldState })=>(
                        <Input 
                        value={field.value} 
                        onChange={field.onChange} 
                        placeholder="Your username" 
                        label="username" 
                        error={fieldState.error?.message}
                        leftIcon={<UserIcon width={36} height={35}/>}/>
                    )
                }/>

                <Controller 
                control={control} 
                name='email'
                rules={{
                    required:{
                        value:true,
                        message:"Email is required"
                }}}
                render={
                    ({ field, fieldState })=>(
                        <Input 
                        value={field.value} 
                        onChange={field.onChange} 
                        placeholder="SuperCoolEmail@gmail.com" 
                        label="email" 
                        error={fieldState.error?.message}
                        leftIcon={<UserIcon width={36} height={35}/>}/>
                    )
                }/>

                <Controller 
                control={control} 
                name='password'
                rules={{
                    required:{
                        value:true,
                        message:"Password is required"
                }}}
                render={
                    ({ field, fieldState })=>(
                        <Input.Password 
                        value={field.value} 
                        onChange={field.onChange} 
                        placeholder="password" 
                        label="password" 
                        error={fieldState.error?.message}/>
                    )
                }/>

                <Controller 
                control={control} 
                name='confirmPassword'
                rules={{
                    required:{
                        value:true,
                        message:"Please confirm your password"
                }}}
                render={
                    ({ field, fieldState })=>(
                        <Input.Password 
                        value={field.value} 
                        onChange={field.onChange} 
                        placeholder="confirm password" 
                        label="confirm password" 
                        error={fieldState.error?.message}/>
                    )
                }/>
            </View>
            <View>
                <Button onPress={handleSubmit(onSubmit)} label="Register"/>
                <Text style={styles.bottomText}>Already have an account? Sign in</Text>
            </View>
        </View>
    )
}