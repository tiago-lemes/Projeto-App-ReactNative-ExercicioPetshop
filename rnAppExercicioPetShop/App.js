import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
  Alert,
  StatusBar,
  Picker,
} from "react-native";
import { Appbar, RadioButton } from "react-native-paper";
import React, { useState } from "react";

export default function App() {
  const [qtdeAnimaisPequenos, setQtdeAnimaisPequenos] = useState(0);
  const [qtdeAnimaisGrandes, setQtdeAnimaisGrandes] = useState(0);
  const [qtdeTosas, setQtdeTosas] = useState(0);
  const [fimDeSemana, setFimDeSemana] = useState(false);
  return (
    <>
      <StatusBar backgroundColor="darkblue" barStyle="light-content" />
      <Appbar.Header style={styles.top}>
        <Appbar.BackAction
          onPress={() => {
            console.log("Pressed BackAction 1");
          }}
        />
        <Appbar.Content title="Aplicativo de Testes" subtitle="Javascript" />
        <Appbar.Action
          icon="magnify"
          onPress={() => {
            console.log("Pressed Action 1");
          }}
        />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => {
            console.log("Pressed Action 2");
          }}
        />
      </Appbar.Header>
      <ScrollView style={{ padding: 10, backgroundColor: "lightcyan" }}>
        <View style={{ padding: 0, justifyContent: "space-between" }}>
          <View>
            <Text />
            <View style={{ alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/1642/1642921.png",
                }}
                style={{ width: 200, height: 200 }}
              />
            </View>
          </View>
          <Text>Quantos Animais Pequenos?</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderRadius: 40,
              borderColor: "#757083",
              borderWidth: 2,
              padding: 10,
              justifyContent: "space-between",
            }}
            keyboardType="numeric"
            onChangeText={(newQtde) => setQtdeAnimaisPequenos(parseInt(newQtde))}
            defaultValue={qtdeAnimaisPequenos}
          />
          <Text />
          <Text>Quantos Animais Grandes?</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderRadius: 40,
              borderColor: "#757083",
              borderWidth: 2,
              padding: 10,
              justifyContent: "space-between",
            }}
            keyboardType="numeric"
            onChangeText={(newQtde) => setQtdeAnimaisGrandes(parseInt(newQtde))}
            defaultValue={qtdeAnimaisGrandes}
          />

          <Text>Tosa?</Text>
          <View>
            <RadioButton.Group
              onValueChange={(newQtde) => setQtdeTosas(parseInt(newQtde))}
              value={qtdeTosas}
            >
              <RadioButton.Item label="Sim" value={1} />
              <RadioButton.Item label="Não" value={0} />
            </RadioButton.Group>
          </View>
          <Text />
          <Text>Quando?</Text>
          <View>
            <Picker
              selectedValue={fimDeSemana}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setFimDeSemana(itemValue)}
              style={{
                height: 40,
                justifyContent: "space-between",
              }}
            >
              <Picker.Item label="Segunda-Feira" value={false} />
              <Picker.Item label="Terça-Feira" value={false} />
              <Picker.Item label="Quarta-Feira" value={false} />
              <Picker.Item label="Quinta-Feira" value={false} />
              <Picker.Item label="Sexta-Feira" value={false} />
              <Picker.Item label="Sábado" value={true} />
              <Picker.Item label="Domingo" value={true} />
            </Picker>
          </View>
          <Text />
          <Button
            title="Calcular"
            onPress={() =>
              acaoCalcular(qtdeAnimaisPequenos, qtdeAnimaisGrandes, qtdeTosas, fimDeSemana)
            }
          />
          <Text />
          <Text />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "darkblue",
  },
  top: {
    backgroundColor: "darkblue",
  },
});

function acaoCalcular(qtdeAnimaisPequenos, qtdeAnimaisGrandes, qtdeTosas, fimDeSemana) {
  populaPetShops();

  const valoresServico = petShops.map((item) => {
    const valorServico =
      (qtdeAnimaisPequenos * item.precoBanhoPequeno +
        qtdeAnimaisGrandes * item.precoBanhoGrande +
        qtdeTosas * item.tosa) *
      (fimDeSemana ? 1.2 : 1);
    return { ...item, valorServico };
  });

  function compararPrecos(petShop1, petShop2) {
    if (petShop1.valorServico < petShop2.valorServico) {
      return -1;
    } else if (petShop1.valorServico > petShop2.valorServico) {
      return 1;
    } else {
      if (petShop1.distancia < petShop2.distancia) {
        return -1;
      } else if (petShop1.distancia > petShop2.distancia) {
        return 1;
      }
    }

    return 0;
  }

  valoresServico.sort(compararPrecos);

  Alert.alert(
    "Valores",
    `Quantidade de Animais Pequenos: ${qtdeAnimaisPequenos}
Quantidade de Animais Grandes: ${qtdeAnimaisGrandes}
Quantidade de Tosas: ${qtdeTosas}
Quando: ${fimDeSemana ? "Fim de Semana" : "Dia de Semana"}

Melhor PetShop: ${valoresServico[0].nome}`
  );
  console.log(valoresServico);
}

const petShops = [];

function populaPetShops() {
  while (petShops.length) {
    petShops.pop();
  }
  /*
  petShops.push({
    nome: "PetShop A",
    precoBanhoPequeno: 30,
    precoBanhoGrande: 50,
    distancia: 3,
  });
  petShops.push({
    nome: "PetShop B",
    precoBanhoPequeno: 20,
    precoBanhoGrande: 55,
    distancia: 2,
  });
  petShops.push({
    nome: "PetShop C",
    precoBanhoPequeno: 25,
    precoBanhoGrande: 45,
    distancia: 4,
  });*/
  petShops.push({
    nome: "petShopA",
    precoBanhoPequeno: 30,
    precoBanhoGrande: 50,
    tosa: 25,
    distancia: 3,
  });
  petShops.push({
    nome: "petShopB",
    precoBanhoPequeno: 20,
    precoBanhoGrande: 55,
    tosa: 35,
    distancia: 2,
  });
  petShops.push({
    nome: "petShopC",
    precoBanhoPequeno: 35,
    precoBanhoGrande: 45,
    tosa: 25,
    distancia: 4,
  });
  petShops.push({
    nome: "petShopD",
    precoBanhoPequeno: 32,
    precoBanhoGrande: 46,
    tosa: 30,
    distancia: 2.5,
  });
  petShops.push({
    nome: "petShopE",
    precoBanhoPequeno: 40,
    precoBanhoGrande: 45,
    tosa: 22,
    distancia: 7,
  });
}

petShops.push({
  nome: "petShopA",
  precoBanhoPequeno: 30,
  precoBanhoGrande: 50,
  tosa: 25,
  distancia: 3,
});
petShops.push({
  nome: "petShopB",
  precoBanhoPequeno: 20,
  precoBanhoGrande: 55,
  tosa: 35,
  distancia: 2,
});
petShops.push({
  nome: "petShopC",
  precoBanhoPequeno: 35,
  precoBanhoGrande: 45,
  tosa: 25,
  distancia: 4,
});
petShops.push({
  nome: "petShopD",
  precoBanhoPequeno: 32,
  precoBanhoGrande: 46,
  tosa: 30,
  distancia: 2.5,
});
petShops.push({
  nome: "petShopE",
  precoBanhoPequeno: 40,
  precoBanhoGrande: 45,
  tosa: 22,
  distancia: 7,
});
/*
PetShop A: banho animais pequenos 30, banho animais grandes 50. Está a 3km
de distância.
PetShop B: banho animais pequenos 20, banho animais grandes 55.Está a 2km
de distância.
PetShop C: banho animais pequenos 35, banho em animais grandes 45. Está a
4km de distância.
Observação: aos finais de semana, o preço em todos os estabelecimentos aumenta em
20%.
*/

/*

      <Appbar style={styles.bottom} theme={{ fonts: { medium: "Open Sans" } }}>
        <Appbar.Action icon="archive" onPress={() => console.log(Math.round(Math.random()))} />
        <Appbar.Action icon="mail" onPress={() => console.log("Pressed mail")} />
        <Appbar.Action icon="label" onPress={() => console.log("Pressed label")} />
        <Appbar.Action icon="delete" onPress={() => console.log("Pressed delete")} />
      </Appbar>
      
let x = 10;

function Dobra_X() {
  return x * 2;
}

async function OnPressButtonAcao() {
  async function returnPromise(promise) {
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = Math.round(Math.random());
      console.log(value);
      x = value;
      if (value === 1) {
        resolve("Sucesso");
      } else {
        reject("Erro");
      }
    }, 3000);
  });

  const a = await returnPromise(myPromise);
  Alert.alert(Dobra_X().toString(), `dobrou ${x}`);
}

function printTexto(text) {
  Alert.alert(`Quantidade de Animais Pequenos: ${text}`);
}
*/
