import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const ColorPage = ({ data }) => {
  const [currentColor, setCurrentColor] = useState(null);

  useEffect(() => {
    if (data.sequence?.length) {
      setCurrentColor(data.sequence[0]);
    }
  }, [data]);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: data?.color || "transparent",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data?.color === null && (
        <Text
          style={{
            fontSize: 120,
          }}
        >
          <AntDesign name={data?.side} size={120} color="black" />
        </Text>
      )}
    </View>
  );
};

export default ColorPage;
