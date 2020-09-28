import React, { useEffect, useRef } from "react";
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
        console.log(data);
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
          style={{height: '20%'}}
          horizontal={true}
          data={osuEventsRef.current}
          extraData={osuEventsRef.current}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>

      <ListCard>
        <Text style={styles.eventTypeHeader}>DOI Events</Text>
        <FlatList
          style={{height: '20%'}}
          horizontal={true}
          data={doiEventsRef.current}
          extraData={doiEventsRef.current}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>

      <ListCard>
        <Text style={styles.eventTypeHeader}>WiE LC Events</Text>
        <FlatList
          style={{height: '20%'}}
          horizontal={true}
          data={wieLcEventsRef.current}
          extraData={wieLcEventsRef.current}
          renderItem={renderItem}
          keyExtractor={(item) => item.label}
        />
      </ListCard>
    </View>
  );
}
