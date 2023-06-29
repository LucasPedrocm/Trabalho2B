import { useAuth } from "../contexts/AuthContext";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";

export default function Routes(){

    const { logado, loading } = useAuth();
    
    if(loading){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size= {'large'} />
            </View>
        )
    }

    return(
        logado == true ? <AppRoutes /> : <AuthRoutes />
    )
}