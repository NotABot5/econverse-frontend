import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";

export default function Home() {
  const navigation = useNavigation();
  const [companyName, setCompanyName] = useState("");
  const [personName, setPersonName] = useState("");
  const [offerContent, setOfferContent] = useState("");
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={style.parent_view}>
      <Text style={style.text_large}>Asystent</Text>
      <Text style={style.text_label}>Nazwa firmy</Text>
      <TextInput
        style={style.input_field}
        value={companyName}
        onChangeText={setCompanyName}
      />
      <Text style={style.text_label}>Imię i nazwisko osoby (opcjonalnie)</Text>
      <TextInput
        style={style.input_field}
        value={personName}
        onChangeText={setPersonName}
      />
      <Text style={style.text_label}>Zawartość oferty</Text>
      <TextInput
        style={style.input_field}
        value={offerContent}
        onChangeText={setOfferContent}
      />
      <Text style={style.test_button}>Wyślij zapytanie</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  text_large: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF7900",
    marginBottom: 30,
  },
  text_label: {
    fontSize: 10,
    textAlign: "center",
    color: "#777",
    fontWeight: "bold",
    marginBottom: 5,
  },

  input_field: {
    backgroundColor: "#222",
    fontSize: 16,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
    borderColor: "#424242",
    borderStyle: "solid",
    borderWidth: 2,
    color: "#fff",
    padding: 8,
    width: "100%",
    borderRadius: 5,
  },
  parent_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 52,
    backgroundColor: "#000000",
  },
  test_button: {
    marginVertical: 10,
    backgroundColor: "#FF7900",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});
