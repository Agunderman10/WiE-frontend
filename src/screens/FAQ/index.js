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
          <Text
            style={styles.moreInfo}
            onPress={() => navigation.navigate("Discussions")}
          >
            More info &gt;
          </Text>
        </ListCard>
        <ListCard>
          <QuestionCard
            questionBody={
              "Below is a link that goes more in-depth about scholarship opportunities for incoming first year student in engineering:\n\n\u2022 https://engineering.osu.edu/undergraduate/engineering-scholarships-incoming-freshmen\n\nThere are additional scholarships available for continuing students as well that can be found below:\n\n\u2022 https://engineering.osu.edu/undergraduate/engineering-scholarships-continuing-students"
            }
            header={
              "What scholarship opportunities are available to incoming first year students?"
            }
          />
        </ListCard>
        <ListCard>
          <QuestionCard
            questionBody={
              "Ultimately, the decision on which learning communities to apply for is up to you and what you feel is in your best interest. There is a wide range of learning communities available and more information can be found below to help you weigh your options:\n\n\u2022 https://housing.osu.edu/posts/documents/learning-commmunity-summary-sheet.pdf\n\n\u2022 https://issuu.com/osuai/docs/lc_guide_final_9d3e47d66a444d\n\n\u2022 https://housing.osu.edu/learning-communities/"
            }
            header={"How do I choose what learning community to apply for?"}
          />
        </ListCard>
        <ListCard>
          <QuestionCard
            questionBody={
              "When using credit to move on to a subsequent course, you will be responsible for having a strong foundation in all prerequisites. If you feel like you do not have a strong foundation, you can waive credit and start at the equivalent course that the credit would have covered. If you feel good with where you are at, you can use the credit and move on to the next course. More information regarding credit can be found below:\n\n\u2022 https://registrar.osu.edu/priorlearning/index.html"
            }
            header={
              "I have credit from AP classes. Should I waive the credit or move to the next course?"
            }
          />
        </ListCard>
        <ListCard>
          <QuestionCard
            questionBody={
              "Minor programs vary by department and college. Research different minor programs that you are interested in to get a sense for the necessary requirements. Next, reach out to your advisor to help you finalize plans and figure out ways to determine a graduation projection that best fits your needs.\n\n\u2022 https://advising.engineering.osu.edu/current-students/minors"
            }
            header={
              "I am interested in a minor. How do plan for this in my schedule?"
            }
          />
        </ListCard>
        <ListCard>
          <QuestionCard
            questionBody={
              "On-campus residents select a meal plan when you complete your housing contract. Meal plans are also available for off-campus residents. Choose the plan that best matches how you prefer to eat. For more information about the various plans available and frequent terms like “Dining Dollars” and “BuckID Cash,” check out the link below:\n\n\u2022 https://dining.osu.edu/dining-plans/columbus-campus-dining-plans/"
            }
            header={"How do I choose a meal plan and what should I pick?"}
          />
        </ListCard>
        <View style={styles.footerMargin}></View>
      </ScrollView>
    </View>
  );
}
