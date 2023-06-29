import { TouchableOpacity, TextInput, View, Image, Text} from "react-native";
import styles from "./styles";
import {Link} from '@react-navigation/native';

export default function ForgetPasswordPage()
{   
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            <TextInput placeholder="email" style={styles.imput}/>
            <TouchableOpacity style={styles.btnLogin}>
                <Text>Recuperar senha</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: "RegisterPage"}}>Registre-se</Link>
                <Link to={{screen: "LoginPage"}}>Voltar para o Login</Link>
            </View>
        </View>
    )
}