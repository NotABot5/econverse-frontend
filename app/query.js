import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";

export default function Home() {
  const navigation = useNavigation();
  const [companyName, setCompanyName] = useState("");
  const [hints, setHints] = useState("");
  const [offerContent, setOfferContent] = useState("");
  const [response, setResponse] = useState("");
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <>
      {response ? (
        <View style={style.parent_view}>
          <Text style={style.text_large}>Informacje o {companyName}:</Text>
          <Text style={style.text_small}>{response}</Text>
        </View>
      ) : (
        <View style={style.parent_view}>
          <Text style={style.text_large}>Asystent</Text>
          <Text style={style.text_label}>Nazwa firmy</Text>
          <TextInput
            style={style.input_field}
            value={companyName}
            onChangeText={setCompanyName}
          />
          <Text style={style.text_label}>
            Dodaj podpowiedzi do wyszukiwania firmy (opcjonalnie)
          </Text>
          <TextInput
            style={style.input_field}
            value={hints}
            onChangeText={setHints}
          />
          <Text style={style.text_label}>Co chcesz sprzedać?</Text>
          <TextInput
            style={style.input_field}
            value={offerContent}
            onChangeText={setOfferContent}
          />
          <Text
            style={style.test_button}
            onPress={async (e) => {
              e.preventDefault();
              const to_pass = JSON.stringify({
                name: companyName,
                info: hints,
              });
              console.log(to_pass);
              const resp = await fetch(
                "https://w74mw4w2a3eai42dj26lljs64u0xfzxu.lambda-url.us-east-1.on.aws/",
                {
                  method: "POST",
                  statusCode: 201,
                  isBase64Encoded: false,
                  body: to_pass,
                  headers: {
                    "content-type": "application/json",
                  },
                }
              );
              console.log(resp);
              const data = await resp.json();
              console.log(data);
            }}
          >
            Wyślij zapytanie
          </Text>
          <StatusBar style="auto" />
        </View>
      )}
    </>
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
  text_small: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
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
