import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Link} from '@react-navigation/native';

const baseUrl = "https://api.otaviolube.com";

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.7;

export default function CardFilme({filme}){
    return (
        <View style={styles.container}>
            <Image style={styles.image} source=
            {{ uri: baseUrl + filme.poster.data.attributes.url}}/>
            <Text style={styles.titulo}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse.length > 200 ? filme.sinopse.substring(0,200) + "..." : filme.sinopse}</Text>
            <Link to={{screen: "MovieDetailsPage", params: {filme: filme}}}> Saiba mais ...</Link>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        margin: 15,
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center',
        width: MAX_WIDTH,
        height: MAX_HEIGHT
    },
    image:{
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        marginBottom: 10
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    sinopse: {
        marginBottom: 10
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})