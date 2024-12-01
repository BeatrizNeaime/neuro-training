import { useEffect, useState } from "react";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Regressive from "./../components/Regressive";
import ColorPage from "./../components/Colors";

const Game = ({ data, setPlay }) => {
  const [regressive, setRegressive] = useState(3);
  const [gameData, setGameData] = useState({
    start: false,
    end: false,
    counting: true,
    arrowDirection: null,
  });

  const handleClose = () => {
    setGameData((prevGameData) => ({
      ...prevGameData,
      start: false,
      end: true,
    }));
    setPlay(false);
  };

  useEffect(() => {
    console.log(data);
    const count = setInterval(() => {
      setRegressive((prev) => {
        if (prev <= 1) {
          clearInterval(count);
          setGameData((prevGameData) => ({
            ...prevGameData,
            start: true,
            counting: false,
          }));
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(count);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <AntDesign
        name="close"
        size={24}
        color="black"
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 999,
        }}
        onPress={handleClose}
      />
      {gameData.counting && <Regressive value={regressive} />}
      {gameData.start && (
        <ColorPage data={{ color: data.color, side: data.side }} />
      )}
    </View>
  );
};

export default Game;
