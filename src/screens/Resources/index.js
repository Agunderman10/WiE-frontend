import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";

import { Card } from "../../components/Card/index";
import { Header } from "./../../components/Header/index";
import { ListCard } from "./../../components/ListCard/index";
import { styles } from "./styles";

export function Resources() {
  return (
    <View>
      <ScrollView>
        <Header title={"Resources"} />
        <ListCard>
          <ImageBackground
            style={styles.resourceImage}
            imageStyle={{borderRadius: 25}}
            source={require("./../../../images/Oval.jpg")}
          >
            <Text style={styles.resourceTypeHeader}>ACE Tutoring</Text>
          </ImageBackground>
        </ListCard>

        <ListCard>
          <ImageBackground
            style={styles.resourceImage}
            imageStyle={{borderRadius: 25}}
            source={require("./../../../images/peertutoringflyer.jpg")}
          >
            <Text style={styles.resourceTypeHeader}>Drackett/Dorm Tutoring</Text>
          </ImageBackground>
        </ListCard>

        <ListCard>
          <ImageBackground
            style={styles.resourceImageBottom}
            imageStyle={{borderRadius: 25}}
            source={require("./../../../images/Oval.jpg")}
          >
            <Text style={styles.resourceTypeHeader}>MSLC</Text>
          </ImageBackground>
        </ListCard>
      </ScrollView>
    </View>
  );
}
