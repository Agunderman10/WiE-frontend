import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

import { Card } from "../../components/Card/index";
import { Header } from "./../../components/Header/index";
import { ListCard } from "./../../components/ListCard/index";
import { styles } from "./styles";

export function StudyGroups() {
  const DATA = [
    {
      image: "./../../../images/Oval.jpg",
      label: "Monday Recitation 12:00pm",
    },
    {
      image: "./../../../images/Oval.jpg",
      label: "Wednesday Lecture 12:00pm",
    },
    {
      image: "./../../../images/Oval.jpg",
      label: "Friday Lecture 12:00pm",
    },
  ];

  const renderItem = ({ item }) => {
    return <Card image={item.image} label={item.label} />;
  };

  return (
    <View>
      <ScrollView>
        <Header title={"Study Groups"} />
        <ListCard>
          <Text style={styles.groupHeader}>FE 1181</Text>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>FEH</Text>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>Physics 1250</Text>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>Chem 1210</Text>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
          />
        </ListCard>
        <View style={styles.bottomGroup}></View>
      </ScrollView>
    </View>
  );
}
