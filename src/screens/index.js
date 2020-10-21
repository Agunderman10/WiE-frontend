import React, { useEffect, useState } from "react";
import { Landing } from "./Landing";
import { Navigator } from "../components/Navigator";
import { getEvents } from "../api/EventsAPI";
import { getStudyGroups } from "../api/StudyGroupsAPI";
import { SplashScreen } from "./SplashScreen";

export function Screens() {
  const [events, setEvents] = useState();
  const [studyGroups, setStudyGroups] = useState();
  const [loading, setLoading] = useState(false);

  let isSignedIn = true;
  // get login info from keychain. if logged in display navigator, if not display landing

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  const checkIfUserIsLoggedIn = async () => {
    setLoading(true);
    // check if user is logged in in async storage or keychain here
    let isLoggedIn = true;

    getDataFromAPI();
  };

  const getDataFromAPI = async () => {
    setLoading(true);
    await getEvents().then(async (data) => {
      setEvents(data);
      await getStudyGroups().then((groups) => {
        setStudyGroups(groups);
      });
    });
    setLoading(false);
  };

  if (loading) {
    return <SplashScreen />;
  }

  return isSignedIn ? (
    <Navigator eventsData={events} studyGroupsData={studyGroups} />
  ) : (
    <Landing />
  );
}
