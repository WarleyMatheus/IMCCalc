import React, {useState} from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default props => {
  const [peso, setPeso] = useState('0');
  const [altura, setAltura] = useState('0.0');
  const [resultado, setResultado] = useState(0);

  function Calcular(){ setResultado (Number(peso) / ( Number(altura) * Number(altura)) ) }

    return(
        <>
            <View>
              <Text>Teste</Text>
              
              <TextInput
                placeholder="Insira o Peso (kg)"
                keyboardType="numeric"
                onChangeText={peso => setPeso(peso)}
                
              />

              <TextInput
                placeholder="Insira a Altura (cm)"
                keyboardType="numeric"
                onChangeText={altura => setAltura(altura)}
                
              />
              
              <Button
                title="Calcular"
                onPress={Calcular}
              />
                    
              <Text> IMC = {resultado}</Text>
        
            </View>
        </>
    )

    const estilo = StyleSheet.create({
      texto: {
        fontSize: 30,
        textAlign:'center',
      },

      input: {
        /*keyboardType: 'numeric',*/
      },

    })
};