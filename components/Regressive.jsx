import { View, Text } from "react-native";

const Regressive = ({ value }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 120,
          fontWeight: "bold",
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default Regressive;
