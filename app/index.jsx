import { Image, Switch, Text, TouchableOpacity, View } from "react-native";
import logo from "../assets/images/adaptive-icon.png";
import FormField from "./../components/FormField";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import Game from "./game";

export default function Index() {
  const [time, setTime] = useState(0);
  const [phases, setPhases] = useState(0);
  const [play, setPlay] = useState(false);
  const [current, setCurrent] = useState(null);
  const [sequence, setSequence] = useState([]);
  const [colors, setColors] = useState([
    { color: "red", active: true, pt: "vermelho" },
    { color: "green", active: true, pt: "verde" },
    { color: "blue", active: true, pt: "azul" },
    { color: "pink", active: true, pt: "rosa" },
    { color: "orange", active: true, pt: "laranja" },
    { color: null, side: true, pt: "lateralidade", active: true },
  ]);

  const generateSequence = () => {
    const validColors = colors.filter((color) => color.active);
    const newSequence = [];

    for (let i = 0; i < phases; i++) {
      let randomColor;
      do {
        randomColor =
          validColors[Math.floor(Math.random() * validColors.length)];
      } while (i > 0 && randomColor.color === newSequence[i - 1]?.color);

      newSequence.push(randomColor);
    }

    // Adiciona lateralidade
    newSequence.forEach((el) => {
      if (el.color === null) {
        el.side = Math.random() < 0.5 ? "arrowleft" : "arrowright";
      }
    });

    let currentPhase = 0;
    let isWhiteScreen = false;

    const displayNextPhase = () => {
      if (currentPhase < newSequence.length) {
        setCurrent(newSequence[currentPhase]);
        currentPhase++;
        isWhiteScreen = true;
        setTimeout(displayNextPhase, time * 1000);
      } else {
        setPlay(false);
      }
    };

    setSequence(newSequence);
    setPlay(true);
    displayNextPhase();
  };

  const handlePlay = () => {
    if (!time || !phases) {
      alert("Preencha todos os campos corretamente");
      return;
    }
    if (colors.filter((c) => c.active).length < 2) {
      alert("Selecione pelo menos duas cores");
      return;
    }
    generateSequence();
  };

  if (play) {
    return <Game data={current} setPlay={setPlay} />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 20,
        height: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          source={logo}
          resizeMode="contain"
          style={{
            width: 150,
            height: 150,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          Para começar, ajuste os parâmetros desejados e clique em "Iniciar"
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 20,
        }}
      >
        <FormField
          label={"Tempo de duração para cada etapa (em segundos)"}
          kType={"numeric"}
          placeholder={"15"}
          value={time}
          handleChangeText={(value) => setTime(value)}
        />
        <FormField
          label={"Quantas fases deseja realizar?"}
          kType={"numeric"}
          placeholder={"15"}
          value={phases}
          handleChangeText={(value) => setPhases(value)}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            marginVertical: 10,
          }}
        >
          Selecione as cores para o exercício
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
        >
          {colors.map((color, index) => (
            <View
              style={{ flexDirection: "row", alignItems: "center" }}
              key={index}
            >
              <Switch
                key={index}
                value={color.active}
                onValueChange={(value) => {
                  const newColors = [...colors];
                  newColors[index].active = value;
                  setColors({ ...colors, colors: newColors });
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 5,
                }}
              >
                {color.pt}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            handlePlay();
          }}
        >
          <Text
            style={{
              color: "white",
              padding: 10,
              borderRadius: 5,
              textAlign: "center",
              fontSize: 20,
              width: "100%",
              marginTop: 20,
              backgroundColor: "orange",
              flexDirection: "row",
              gap: 5,
            }}
          >
            Iniciar
            <Feather
              name="play"
              size={24}
              color="white"
              style={{
                marginLeft: 5,
              }}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
