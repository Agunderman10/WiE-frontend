import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  ScrollView,
  Linking,
  Alert,
  TouchableOpacity,
} from "react-native";

import { Header } from "./../../components/Header/index";
import { ListCard } from "./../../components/ListCard/index";
import { styles } from "./styles";

const lookUpWithGoogle = (resourceUrl) => {
  console.log("look up pressed")
  let url = resourceUrl;
  Linking.canOpenURL(url).then((isSupported) => {
    if (isSupported) {
      Linking.openURL(url);
    } else {
      Alert.alert("Error opening page", "There was an issue opening the page.");
    }
  });
};

export function Resources() {
  return (
    <View>
      <ScrollView>
        <Header title={"Resources"} />
        <ListCard>
          <TouchableOpacity onPress={() => lookUpWithGoogle("https://go.osu.edu/peertutoring")}>
            <ImageBackground
              style={styles.resourceImage}
              imageStyle={{ borderRadius: 25 }}
              source={require("./../../../images/Oval.jpg")}
            >
              <Text style={styles.resourceTypeHeader}>ACE Tutoring</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ListCard>

        <ListCard>
          <TouchableOpacity>
            <ImageBackground
              style={styles.resourceImage}
              imageStyle={{ borderRadius: 25 }}
              source={require("./../../../images/peertutoringflyer.jpg")}
            >
              <Text style={styles.resourceTypeHeader}>
                Drackett/Dorm Tutoring
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </ListCard>

        <ListCard>
          <TouchableOpacity>
            <ImageBackground
              style={styles.resourceImageBottom}
              imageStyle={{ borderRadius: 25 }}
              source={require("./../../../images/Oval.jpg")}
            >
              <Text style={styles.resourceTypeHeader}>MSLC</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ListCard>
      </ScrollView>
    </View>
  );
}
