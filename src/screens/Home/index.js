import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { Card } from "../../components/Card/index";
import { Header } from "./../../components/Header/index";
import { ListCard } from "./../../components/ListCard/index";
import { getEvents } from "./../../api/EventsAPI";
import { styles } from "./styles";

export function Home() {
  const [osuEvents, setOsuEvents] = useState({});
  const [doiEvents, setDoiEvents] = useState({});
  const [wieLcEvents, setWieLcEvents] = useState({});

  useEffect(() => {
    getEventsFromAPI();
  }, []);

  const getEventsFromAPI = async () => {
    await getEvents()
      .then((data) => {
        console.log(data);
        setOsuEvents(data.osu_events);
        setDoiEvents(data.doi_events);
        setWieLcEvents(data.wie_lc_events);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  /*
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
  */

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
          data={osuEvents}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>

      <ListCard>
        <Text style={styles.eventTypeHeader}>DOI Events</Text>
        <FlatList
          horizontal={true}
          data={doiEvents}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>

      <ListCard>
        <Text style={styles.eventTypeHeader}>WiE LC Events</Text>
        <FlatList
          horizontal={true}
          data={wieLcEvents}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>
    </View>
  );
}
