import React, { Fragment } from "react";
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
  return (
    <Fragment>
      <FlatList
        data={comentarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
      <View style={estilo.mesmaLinha}>
        <TextInput placeholder="Deixe seu comentário!" style={{ flex: 1 }} />
        <TouchableOpacity>
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
