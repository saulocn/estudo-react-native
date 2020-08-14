import React, { Fragment, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import estilo from "./estilo";

const Comentarios = ({ comentarios }) => {
  const [estadoComentarios, setComentarios] = useState(comentarios);
  const adicionarComentario = () => {
    campoInput.clear();
    const novoComentario = {
      date: Date.now(),
      text: conteudoInput,
      userName: "SauloCN",
    };
    setComentarios([...estadoComentarios, novoComentario]);
  };
  let campoInput;
  let conteudoInput = "";
  return (
    <Fragment>
      <FlatList
        data={estadoComentarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={estilo.mesmaLinha}>
            <Text>{item.userName}: </Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View style={estilo.mesmaLinha}>
        <TextInput
          ref={(textInput) => (campoInput = textInput)}
          onChangeText={(texto) => (conteudoInput = texto)}
          placeholder="Deixe seu comentário!"
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={adicionarComentario}>
          <Image
            source={require("../../../res/img/send.png")}
            style={estilo.imgSend}
          />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};
export default Comentarios;
