import { StatusBar } from 'expo-status-bar';
import { Providers } from './providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm, WelcomeBlock } from '../modules/auth/ui';


export default function App() {
    return (
        <Providers>
            <SafeAreaView {/* тут чего то не хватает */}> 
                <StatusBar style="auto" />
                <WelcomeBlock/>
                <LoginForm/>
            </SafeAreaView>
        </Providers>
);
}
