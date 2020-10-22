import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import { Card } from "../../components/Card/index";
import { ListCard } from "./../../components/ListCard/index";
import { styles } from "./styles";
import { EmptyListNotification } from "../../components/EmptyListNotification";
import { useNavigation } from "@react-navigation/native";
import { getEvents } from "../../api/EventsAPI";

export function Home({ eventsData }) {
  const navigation = useNavigation();
  const events = useState(eventsData);
  const [osuEvents, setOsuEvents] = useState([]);
  const [doiEvents, setDoiEvents] = useState([]);
  const [empowhermentLcEvents, setEmpowermentLcEvents] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    organizeEventsFromAPI(events[0]);
  }, []);

  const organizeEventsFromAPI = async (data) => {
    let organizedOsuEvents = [];
    let organizedDoiEvents = [];
    let organizedEmpowermentLcEvents = [];
    
    // organize data into arrays based on type for ui display
    for (var i = 0; i < data.length; i++) {
      if (data[i].type === "PREFACE") {
        organizedOsuEvents.push({
          label: data[i].label,
          link: data[i].link,
          date: data[i].date,
          time: data[i].time,
          timeIsAmOrPm: data[i].timeIsAmOrPm,
          image: "./../../../images/Oval.jpg",
        });
      } else if (data[i].type === "DOI Events") {
        organizedDoiEvents.push({
          label: data[i].label,
          link: data[i].link,
          date: data[i].date,
          time: data[i].time,
          timeIsAmOrPm: data[i].timeIsAmOrPm,
          image: "./../../../images/Oval.jpg",
        });
      } else if (data[i].type === "EmpowHERment LC Events") {
        organizedEmpowermentLcEvents.push({
          label: data[i].label,
          link: data[i].link,
          date: data[i].date,
          time: data[i].time,
          timeIsAmOrPm: data[i].timeIsAmOrPm,
          image: "./../../../images/Oval.jpg",
        });
      }
      setOsuEvents(organizedOsuEvents);
      setDoiEvents(organizedDoiEvents);
      setEmpowermentLcEvents(organizedEmpowermentLcEvents);
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
          data={doiEvents}
          extraData={doiEvents}
          renderItem={renderItem}
          ListEmptyComponent={EmptyListNotification}
          keyExtractor={(item) => item.label}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={async () => {
                await getEvents().then(async (data) => {
                  organizeEventsFromAPI(data);
                });
              }}
            />
          }
        />
      </ListCard>

      <ListCard>
        <Text style={styles.eventTypeHeader}>PREFACE</Text>
        <FlatList
          style={{ height: "20%" }}
          horizontal={true}
          data={osuEvents}
          extraData={osuEvents}
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
          data={empowhermentLcEvents}
          extraData={empowhermentLcEvents}
          renderItem={renderItem}
          ListEmptyComponent={EmptyListNotification}
          keyExtractor={(item) => item.label}
        />
      </ListCard>
    </View>
  );
}
