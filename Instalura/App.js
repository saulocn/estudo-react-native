import React, { Fragment } from "react";
import { ScrollView, FlatList } from "react-native";
import { Cabecalho } from "./src/Components/Cabecalho";
import { Foto } from "./src/Components/Foto";

const informacoes = [
  {
    id: 1,
    usuario: "Saulo 1",
  },
  {
    id: 2,
    usuario: "Saulo 2",
  },
  {
    id: 3,
    usuario: "Saulo 3",
  },
];

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={informacoes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Fragment>
            <Cabecalho nomeUsuario={item.usuario} />
            <Foto />
          </Fragment>
        )}
      />
    </ScrollView>
  );
};

export default App;
