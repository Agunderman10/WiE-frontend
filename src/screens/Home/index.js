import React from "react";
import { View, Text, FlatList } from "react-native";

import { Card } from "../../components/Card/index";
import { Header } from "./../../components/Header/index";
import { styles } from "./styles";

export function Home() {
  const DATA = [
    {
      image: "./../../../images/Oval.jpg",
      label: "WiE Empowherment Session",
    },
    {
      image: "./../../../images/Oval.jpg",
      label: "WiE Mental Health Session",
    },
    {
      image: "./../../../images/Oval.jpg",
      label: "WiE Mental Session",
    },
    {
      image: "./../../../images/Oval.jpg",
      label: "WiE Session",
    },
  ];

  const renderItem = ({ item }) => {
    return <Card image={item.image} label={item.label} />;
  };

  return (
    <View>
      <Header title={"Home"}/>
      <Text style={styles.eventTypeHeader}>OSU Events</Text>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.label}
      />

      <Text style={styles.eventTypeHeader}>DOI Events</Text>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.label}
      />

      <Text style={styles.eventTypeHeader}>WiE LC Events</Text>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.label}
      />
    </View>
  );
}
