import { View, Text } from "react-native";

const Regressive = ({ value }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default Regressive;
