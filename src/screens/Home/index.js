import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { Card } from "../../components/Card/index";
import { Header } from "./../../components/Header/index";
import { ListCard } from "./../../components/ListCard/index";
import { getEvents } from "./../../api/EventsAPI";
import { styles } from "./styles";

export function Home() {
  const osuEventsRef = useRef([]);
  const doiEventsRef = useRef([]);
  const wieLcEventsRef = useRef([]);

  useEffect(() => {
    getEventsFromAPI();
  }, []);

  const getEventsFromAPI = async () => {
    await getEvents()
      .then((data) => {
        // organize data into arrays based on type for ui display
        for(var i = 0; i < data.length; i++) {
          if(data[i].type === "MEP PREFACE") {
            osuEventsRef.current.push({ label: data[i].label, image: "./../../../images/Oval.jpg" });
          }
          else if(data[i].type === "DOI Events") {
            doiEventsRef.current.push({ label: data[i].label, image: "./../../../images/Oval.jpg" });
          }
          else {
            wieLcEventsRef.current.push({ label: data[i].label, image: "./../../../images/Oval.jpg" });
          }
        }
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
        <Text style={styles.eventTypeHeader}>MEP PREFACE</Text>
        <FlatList
          horizontal={true}
          data={osuEventsRef.current}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>

      <ListCard>
        <Text style={styles.eventTypeHeader}>DOI Events</Text>
        <FlatList
          horizontal={true}
          data={doiEventsRef.current}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>

      <ListCard>
        <Text style={styles.eventTypeHeader}>WiE LC Events</Text>
        <FlatList
          horizontal={true}
          data={wieLcEventsRef.current}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>
    </View>
  );
}
