import React, { useEffect, useState } from "react";
import { Landing } from "./Landing";
import { Navigator } from "../components/Navigator";
import { getEvents } from "../api/EventsAPI";
import { getStudyGroups } from "../api/StudyGroupsAPI";

export function Screens() {
  const [events, setEvents] = useState();
  const [studyGroups, setStudyGroups] = useState();

  let isSignedIn = true;
  // get login info from keychain. if logged in display navigator, if not display landing

  useEffect(() => {
    getEventsFromAPI();
    getStudyGroupsFromAPI();
  }, []);

  const getEventsFromAPI = async () => {
    await getEvents().then((data) => {
      setEvents(data);
    });
  };

  const getStudyGroupsFromAPI = async () => {
    await getStudyGroups().then((data) => {
      setStudyGroups(data);
    });
  };

  return isSignedIn ? <Navigator eventsData={events} studyGroupsData={studyGroups} /> : <Landing />;
}
