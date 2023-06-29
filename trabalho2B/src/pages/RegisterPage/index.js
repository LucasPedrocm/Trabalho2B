import { TouchableOpacity, TextInput, View, Image, Text} from "react-native";
import styles from "./styles";
import {Link} from '@react-navigation/native';

export default function RegisterPage()
{
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            <TextInput placeholder="username" style={styles.imput}/>
            <TextInput placeholder="email" style={styles.imput}/>
            <TextInput placeholder="senha" style={styles.imput}/>
            <TouchableOpacity style={styles.btnLogin}>
                <Text>Registrar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: "LoginPage"}}>Voltar para o Login</Link>
                <Link to={{screen: "ForgetPasswordPage"}}>Esqueceu a senha?</Link>
            </View>
        </View>
    )
}