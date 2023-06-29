import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
    return (
        <Stack.Navigator>
        <Stack.Screen name='LoginPage' component={LoginPage} opitions={{headerShown: false}}/>
        <Stack.Screen name='RegisterPage' component={RegisterPage} opitions={{headerShown: false}}/>
        <Stack.Screen name='ForgetPasswordPage' component={ForgetPasswordPage} opitions={{headerShown: false}}/>
        </Stack.Navigator>
    );
}