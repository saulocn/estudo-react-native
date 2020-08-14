/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Text, 
  Image,
  ScrollView,
  Dimensions,
  StyleSheet
} from 'react-native'

const largura = Dimensions.get("screen").width
const informacoes = [{
  usuario:"Saulo 1"
},{
  usuario:"Saulo 2"
},{
  usuario:"Saulo 3"
}]

const App = () => {
  return (
    <ScrollView>
      {
        informacoes.map(foto=>
          <Fragment key={foto.usuario}>
            <Text>{foto.usuario}</Text>
            <Image source={require("./res/img/alura.jpg")} 
            style={estilo.imagem} 
            />
          </Fragment>
        )
      }
   </ScrollView>
  );
};

const estilo = StyleSheet.create({
  imagem:{
    width:largura, 
    height:largura
  }
})

export default App;
