import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextoMessage } from './src/componentes';
//o que é default não precis das chaves

export default function App() {
  return (
    <View style={styles.container}>
      <TextoMessage 
      mensagemErro={""}
      mensagem={"Mavi"}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor:'aqua',   
    justifyContent: 'center',
  },
});
