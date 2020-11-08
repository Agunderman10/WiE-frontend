import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Header } from "./../../components/Header/index";
import { ListCard } from "./../../components/ListCard/index";
import { QuestionCard } from "./components/QuestionCard/index";
import { styles } from "./styles";

export function FAQ() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        {/*<Header title={"FAQ"} />*/}
        <ListCard>
          <View style={styles.discussionBoard}>
            <Text style={styles.discussionBoardText}>Discussion Board</Text>
          </View>
          <Text style={styles.moreInfo} onPress={() => navigation.navigate("Discussions")}>More info &gt;</Text>
        </ListCard>
        <ListCard>
          <QuestionCard
            questionBody={
              "You will be living in Drackett with the rest of the learning community."
            }
            header={"What should I expect for housing my first year?"}
          />
        </ListCard>

        <ListCard>
          <QuestionCard
            questionBody={
              "You need to have at least 16 credit hours of classes that qualify for the program."
            }
            header={"What are the requirements for graduating in the program?"}
          />
        </ListCard>

        <ListCard>
          <QuestionCard
            questionBody={
              "It is typically around 16 credit hours. Over 18 will cost extra, so it's suggested to stay below that threshold."
            }
            header={"What does a typical first year schedule look like?"}
          />
        </ListCard>

        <ListCard>
          <QuestionCard
            questionBody={
              "It is typically around 16 credit hours. Over 18 will cost extra, so it's suggested to stay below that threshold."
            }
            header={"What does a typical first year schedule look like?"}
          />
        </ListCard>
        <ListCard>
          <QuestionCard
            questionBody={
              "It is typically around 16 credit hours. Over 18 will cost extra, so it's suggested to stay below that threshold."
            }
            header={"What does a typical first year schedule look like?"}
          />
        </ListCard>
        <ListCard>
          <QuestionCard
            questionBody={
              "It is typically around 16 credit hours. Over 18 will cost extra, so it's suggested to stay below that threshold."
            }
            header={"What does a typical first year schedule look like?"}
          />
        </ListCard>
        <ListCard>
          <QuestionCard
            questionBody={
              "It is typically around 16 credit hours. Over 18 will cost extra, so it's suggested to stay below that threshold."
            }
            header={"What does a typical first year schedule look like?"}
          />
        </ListCard>
      </ScrollView>
    </View>
  );
}
