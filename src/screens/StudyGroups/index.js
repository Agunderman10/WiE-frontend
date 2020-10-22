import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

import { Card } from "../../components/Card/index";
import { Header } from "./../../components/Header/index";
import { ListCard } from "./../../components/ListCard/index";
import { styles } from "./styles";
import { EmptyListNotification } from "../../components/EmptyListNotification";
import { useNavigation } from "@react-navigation/native";

export function StudyGroups({ studyGroupsData }) {
  const navigation = useNavigation();
  const [studyGroups, setStudyGroups] = useState(studyGroupsData);
  const [fe1181, setFe1181] = useState([]);
  const [feh, setFeh] = useState([]);
  const [physics1250, setPhysics1250] = useState([]);
  const [physics1251, setPhysics1251] = useState([]);
  const [chem1210, setChem1210] = useState([]);
  const [math1172, Math1172] = useState([]);

  useEffect(() => {
    organizeStudyGroupsFromAPI(studyGroups);
  }, []);

  const organizeStudyGroupsFromAPI = async (data) => {
    let organizedFe1181 = [];
    let organizedFeh = [];
    let organizedPhysics1250 = [];
    let organizedPhysics1251 = [];
    let organizedChem1210 = [];
    let organizedMath1172 = [];

    for (var i = 0; i < data.length; i++) {
      if (data[i].class === "FE 1181") {
        organizedFe1181.push({
          label: data[i].label,
          link: data[i].link,
          date: data[i].date,
          time: data[i].time,
          timeIsAmOrPm: data[i].timeIsAmOrPm,
          image: "./../../../images/Oval.jpg",
        });
      } else if (data[i].class === "FEH") {
        organizedFeh.push({
          label: data[i].label,
          link: data[i].link,
          date: data[i].date,
          time: data[i].time,
          timeIsAmOrPm: data[i].timeIsAmOrPm,
          image: "./../../../images/Oval.jpg",
        });
      } else {
        organizedPhysics1250.push({
          label: data[i].label,
          link: data[i].link,
          date: data[i].date,
          time: data[i].time,
          timeIsAmOrPm: data[i].timeIsAmOrPm,
          image: "./../../../images/Oval.jpg",
        });
      }
      setFe1181(organizedFe1181);
      setFeh(organizedFeh);
      setPhysics1250(organizedPhysics1250);
    }
  };

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
      <ScrollView>
        <Header title={"Study Groups"} />
        <ListCard>
          <Text style={styles.groupHeader}>FE 1181</Text>
          <FlatList
            style={{ height: "10%" }}
            horizontal={true}
            data={fe1181}
            extraData={fe1181}
            renderItem={renderItem}
            ListEmptyComponent={EmptyListNotification}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>FEH</Text>
          <FlatList
            style={{ height: "10%" }}
            horizontal={true}
            data={feh}
            extraData={feh}
            renderItem={renderItem}
            ListEmptyComponent={EmptyListNotification}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>Physics 1250</Text>
          <FlatList
            style={{ height: "10%" }}
            horizontal={true}
            data={physics1250}
            extraData={physics1250}
            renderItem={renderItem}
            ListEmptyComponent={EmptyListNotification}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>Physics 1251</Text>
          <FlatList
            style={{ height: "10%" }}
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            ListEmptyComponent={EmptyListNotification}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>Chem 1210</Text>
          <FlatList
            style={{ height: "10%" }}
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            ListEmptyComponent={EmptyListNotification}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>Math 1172</Text>
          <FlatList
            style={{ height: "10%" }}
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            ListEmptyComponent={EmptyListNotification}
            keyExtractor={(item) => item.label}
          />
        </ListCard>
        <View style={styles.bottomGroup}></View>
      </ScrollView>
    </View>
  );
}
