import React, { Fragment, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import estilo from "./estilo";
import { curtirFoto, imgLike } from "../../api/curtidas";

const Foto = ({ urlFoto, descricao, qtdLikes }) => {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qtdLikes);
  const clicouCurtir = () => {
    const curtidas = curtirFoto(curtiu, likes);
    setLikes(curtidas.qtd);
    setCurtiu(curtidas.curtido);
  };
  return (
    <Fragment>
      <Image source={{ uri: urlFoto }} style={estilo.imagem} />
      <Text>{descricao}</Text>
      <View style={estilo.viewLike}>
        <TouchableOpacity onPress={clicouCurtir}>
          <Image source={imgLike(curtiu)} style={estilo.like} />
        </TouchableOpacity>
        <Text>{likes} curtidas</Text>
      </View>
    </Fragment>
  );
};
export default Foto;
