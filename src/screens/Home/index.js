import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import { Card } from "../../components/Card/index";
import { Header } from "./../../components/Header/index";
import { ListCard } from "./../../components/ListCard/index";
import { getEvents } from "./../../api/EventsAPI"
import { styles } from "./styles";

export function Home() {

  useEffect(() => {
    getEvents();
  }, []);

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
    <Header title={"Home"} />
      <ListCard>
        <Text style={styles.eventTypeHeader}>OSU Events</Text>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>

      <ListCard>
        <Text style={styles.eventTypeHeader}>DOI Events</Text>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>

      <ListCard>
        <Text style={styles.eventTypeHeader}>WiE LC Events</Text>
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
