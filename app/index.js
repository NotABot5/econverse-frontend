import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { Link, useNavigation } from "expo-router";
import * as Linking from "expo-linking";

export default function Home() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 52,
        backgroundColor: "#000000",
      }}
    >
      <Text style={style.text_large}>Podpowiedzi do oferty</Text>
      <Text style={style.text_small}>
        Ta aplikacja to wersja demonstracyjna funkcjonalności wykorzystującej
        sztuczną inteligencję i inteligentne wyszukiwanie danych, aby bardziej
        dopasować ofertę sprzedawcy do potencjalnego klienta i zwiększyć tym
        samym jej atrakcyjność. Aplikacja początkowo inteligentnie wyszukuje
        najważniejsze dane na temat klienta (osoby i firmy) dostępne w
        internecie (np. ze specjalistycznych portali branżowych), a następnie na
        podstawie tych danych daje propozycje zmian w ofercie, które mogą
        pozytywnie wpłynąć na zainteresowanie klienta
      </Text>
      <Link href="/query" style={style.test_button}>
        Wypróbuj aplikację
      </Link>
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
  },
  text_small: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
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
