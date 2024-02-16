import { useEffect, useState } from "react";
import { View, Text , StyleSheet} from "react-native";


//o nome do const sera o nome do que estamos criando
const TextoMessage = (props) => {
    const { mensagem: message, mensagemErro: erro } = props;

    const [hasError, setHasError ] = useState(false); //definindo a constante de erro 

    useEffect( () => {
        setHasError(!!erro); //controlando o estado 
    }, [erro]);

    return(
        <View>
            {hasError ?
            (<Text style={styles.erro}>{erro}</Text>) //se tem erro
            :(<Text style={styles.texto}>{message}</Text>)} 
        </View>
    );

}

const styles = StyleSheet.create({
    texto: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },
    erro: {
        fontSize: 15,
        textAlign: 'center',
        color: 'red',
    }
})

//tornando o elemento visível
export default TextoMessage;