import React from "react";
import { View, Text, FlatList } from "react-native";

import { Card } from "../../components/Card/index";
import { Header } from "./../../components/Header/index";
import { ListCard } from "./../../components/ListCard/index";
import { styles } from "./styles";

export function Resources() {
  const DATA = [
    {
      image: "./../../../images/Oval.jpg",
      label: "Summary",
    },
    {
      image: "./../../../images/Oval.jpg",
      label: "How to Join",
    },
    {
      image: "./../../../images/Oval.jpg",
      label: "Contact Info",
    },
  ];

  const renderItem = ({ item }) => {
    return <Card image={item.image} label={item.label} />;
  };

  return (
    <View>
    <Header title={"Resources"} />
      <ListCard>
        <Text style={styles.resourceTypeHeader}>ACE Tutoring</Text>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>

      <ListCard>
        <Text style={styles.resourceTypeHeader}>Drackett/Dorm Tutoring</Text>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>

      <ListCard>
        <Text style={styles.resourceTypeHeader}>MSLC</Text>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>
    </View>
  );
}
