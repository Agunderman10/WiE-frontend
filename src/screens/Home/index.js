import React, { useEffect, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import { Card } from "../../components/Card/index";
import { ListCard } from "./../../components/ListCard/index";
import { styles } from "./styles";
import { EmptyListNotification } from "../../components/EmptyListNotification";
import { useNavigation } from "@react-navigation/native";

export function Home({ eventsData }) {
  const navigation = useNavigation();
  const events = useRef(eventsData);
  const osuEventsRef = useRef([]);
  const doiEventsRef = useRef([]);
  const empowhermentLcEventsRef = useRef([]);

  useEffect(() => {
    organizeEventsFromAPI(events.current);
  }, []);

  const organizeEventsFromAPI = async (data) => {
    // organize data into arrays based on type for ui display
    for (var i = 0; i < data.length; i++) {
      if (data[i].type === "PREFACE") {
        osuEventsRef.current.push({
          label: data[i].label,
          link: data[i].link,
          date: data[i].date,
          time: data[i].time,
          timeIsAmOrPm: data[i].timeIsAmOrPm,
          image: "./../../../images/Oval.jpg",
        });
      } else if (data[i].type === "DOI Events") {
        doiEventsRef.current.push({
          label: data[i].label,
          link: data[i].link,
          date: data[i].date,
          time: data[i].time,
          timeIsAmOrPm: data[i].timeIsAmOrPm,
          image: "./../../../images/Oval.jpg",
        });
      } else if (data[i].type === "EmpowHERment LC Events") {
        empowhermentLcEventsRef.current.push({
          label: data[i].label,
          link: data[i].link,
          date: data[i].date,
          time: data[i].time,
          timeIsAmOrPm: data[i].timeIsAmOrPm,
          image: "./../../../images/Oval.jpg",
        });
      }
    }
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
    return (
      <Card
        image={item.image}
        label={item.label}
        location={item.link}
        date={item.date}
        time={item.time}
        timeIsAmOrPm={item.timeIsAmOrPm}
        navigation={navigation}
      />
    );
  };

  return (
    <View>
      {/*<Header title={"Home"} />*/}

      <ListCard>
        <Text style={styles.eventTypeHeader}>DOI Events</Text>
        <FlatList
          style={{ height: "20%" }}
          horizontal={true}
          data={doiEventsRef.current}
          extraData={doiEventsRef.current}
          renderItem={renderItem}
          ListEmptyComponent={EmptyListNotification}
          keyExtractor={(item) => item.label}
        />
      </ListCard>

      <ListCard>
        <Text style={styles.eventTypeHeader}>PREFACE</Text>
        <FlatList
          style={{ height: "20%" }}
          horizontal={true}
          data={osuEventsRef.current}
          extraData={osuEventsRef.current}
          renderItem={renderItem}
          ListEmptyComponent={EmptyListNotification}
          keyExtractor={(item) => item.label}
        />
      </ListCard>

      <ListCard>
        <Text style={styles.eventTypeHeader}>EmpowHERment LC Events</Text>
        <FlatList
          style={{ height: "20%" }}
          horizontal={true}
          data={empowhermentLcEventsRef.current}
          extraData={empowhermentLcEventsRef.current}
          renderItem={renderItem}
          ListEmptyComponent={EmptyListNotification}
          keyExtractor={(item) => item.label}
        />
      </ListCard>
    </View>
  );
}
