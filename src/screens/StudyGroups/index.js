import React, { useEffect, useRef } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

import { Card } from "../../components/Card/index";
import { Header } from "./../../components/Header/index";
import { ListCard } from "./../../components/ListCard/index";
import { getStudyGroups } from "./../../api/StudyGroupsAPI";
import { styles } from "./styles";

export function StudyGroups() {
  const fe1181Ref = useRef([]);
  const fehRef = useRef([]);
  const physics1250Ref = useRef([]);

  useEffect(() => {
    getStudyGroupsFromApI();
  });

  const getStudyGroupsFromApI = async () => {
    await getStudyGroups().then((data) => {
      for(var i = 0; i < data.length; i++) {
        if(data[i].class === "FE 1181") {
          fe1181Ref.current.push({ label: data[i].label, image: "./../../../images/Oval.jpg" });
        }
        else if(data[i].class === "FEH") {
          fehRef.current.push({ label: data[i].label, image: "./../../../images/Oval.jpg" });
        }
        else {
          physics1250Ref.current.push({ label: data[i].label, image: "./../../../images/Oval.jpg" });
        }
      }
    })
  }

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
    //console.log(item.label);
    return <Card image={item.image} label={item.label} />;
  };

  return (
    <View>
      <ScrollView>
        <Header title={"Study Groups"} />
        <ListCard>
          <Text style={styles.groupHeader}>FE 1181</Text>
          <FlatList
            style={{height: '10%'}}
            horizontal={true}
            data={fe1181Ref.current}
            extraData={fe1181Ref.current}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>FEH</Text>
          <FlatList
            style={{height: '10%'}}
            horizontal={true}
            data={fehRef.current}
            extraData={fehRef.current}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>Physics 1250</Text>
          <FlatList
            style={{height: '10%'}}
            horizontal={true}
            data={physics1250Ref.current}
            extraData={physics1250Ref.current}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>Physics 1251</Text>
          <FlatList
            style={{height: '10%'}}
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>Chem 1210</Text>
          <FlatList
            style={{height: '10%'}}
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
          />
        </ListCard>

        <ListCard>
          <Text style={styles.groupHeader}>Math 1172</Text>
          <FlatList
            style={{height: '10%'}}
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
