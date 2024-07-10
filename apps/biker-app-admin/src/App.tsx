import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InsuranceReminderList } from "./insuranceReminder/InsuranceReminderList";
import { InsuranceReminderCreate } from "./insuranceReminder/InsuranceReminderCreate";
import { InsuranceReminderEdit } from "./insuranceReminder/InsuranceReminderEdit";
import { InsuranceReminderShow } from "./insuranceReminder/InsuranceReminderShow";
import { BikerList } from "./biker/BikerList";
import { BikerCreate } from "./biker/BikerCreate";
import { BikerEdit } from "./biker/BikerEdit";
import { BikerShow } from "./biker/BikerShow";
import { VoiceChatRoomList } from "./voiceChatRoom/VoiceChatRoomList";
import { VoiceChatRoomCreate } from "./voiceChatRoom/VoiceChatRoomCreate";
import { VoiceChatRoomEdit } from "./voiceChatRoom/VoiceChatRoomEdit";
import { VoiceChatRoomShow } from "./voiceChatRoom/VoiceChatRoomShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BikerApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="InsuranceReminder"
          list={InsuranceReminderList}
          edit={InsuranceReminderEdit}
          create={InsuranceReminderCreate}
          show={InsuranceReminderShow}
        />
        <Resource
          name="Biker"
          list={BikerList}
          edit={BikerEdit}
          create={BikerCreate}
          show={BikerShow}
        />
        <Resource
          name="VoiceChatRoom"
          list={VoiceChatRoomList}
          edit={VoiceChatRoomEdit}
          create={VoiceChatRoomCreate}
          show={VoiceChatRoomShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
