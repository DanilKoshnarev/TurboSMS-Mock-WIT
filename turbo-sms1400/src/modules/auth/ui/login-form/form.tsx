import { Controller, useForm } from "react-hook-form"
import { ILogin } from "../../types"
import { View } from "react-native"
import { Input } from "../../../../shared/ui/input"
import { Button } from "../../../../shared/ui/button"
import { UserIcon } from "../../../../shared/ui/icons"
import { styles } from "./form.styles"

export function LoginForm(){
    // Берез control и handleSubmit с useForm
    // Вместо register мы берем control потому-что register сделал больше для тегов html а не для компонентов
    // handleSubmit - Функция которая сработает при отправки формы
    const { control, handleSubmit } = useForm<ILogin>()

    // Функция которая будет что-то делать при отправке формы
    function onSubmit(data: ILogin){
        console.log(data)
    }

    return(
        <View style={styles.container}>
            <View>
                <Controller 
                // Control - указывает каким хуком формы должен контроллироваться этот контроллер
                control={control} 
                // name='email' - это имя поля взятого из интерфейса(для useForm)
                name='email'
                rules={{
                    required:{
                        value:true,
                        message:"Email is required"
                }}}
                // Рендерим компонент инпута, также (контроллируем)управляем функцией OnChange и value
                // field - це об'єкт який дає змогу контролювати будь-яке поле 
                // fieldState - це об'єкт який має всі стани поля, якого контролює (наприклад помилка)
                render={
                    ({ field, fieldState })=>{
                        return(
                            <Input 
                            value={field.value} 
                            onChange={field.onChange} 
                            placeholder="SuperCoolEmail@gmail.com" 
                            label="email" 
                            error={fieldState.error?.message}
                            leftIcon={<UserIcon width={36} height={35}/>}/>
                        )
                    }
                }/>

                <Controller control={control} name='password'
                rules={{
                    required:{
                        value:true,
                        message:"Password is required"
                }}}
                render={
                    ({ field, fieldState })=>{
                        return(
                            <Input.Password value={field.value} 
                            onChange={field.onChange} 
                            placeholder="password" 
                            label="password" 
                            error={fieldState.error?.message}
                            />
                        )
                    }
                }/>
            </View>
            <View>
                <Button onPress={handleSubmit(onSubmit)} label="Submit"/>
            </View>
        </View>
    )
}