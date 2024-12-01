import { View, Text, TextInput } from "react-native";

const FormField = ({ label, kType, value, handleChangeText, placeholder }) => {
  return (
    <View
      style={{
        marginVertical: 2,
        gap: 5,
        width: "40%",
      }}
    >
      <Text
        style={{
          fontSize: 16,
        }}
      >
        {label}
      </Text>
      <View
        style={{
          width: "100%",
          height: 45,
          paddingHorizontal: 16,
          backgroundColor: "#f0f0f0",
          borderRadius: 6,
          borderColor: "orange",
          borderWidth: 1,
        }}
      >
        <TextInput
          style={{
            width: "100%",
            height: "100%",
            fontSize: 16,
          }}
          keyboardType={kType}
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="gray"
          autoCorrect={false}
          onChange={handleChangeText}
        ></TextInput>
      </View>
    </View>
  );
};

export default FormField;
