import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BIKER_TITLE_FIELD } from "./BikerTitle";
import { VOICECHATROOM_TITLE_FIELD } from "../voiceChatRoom/VoiceChatRoomTitle";
import { INSURANCEREMINDER_TITLE_FIELD } from "../insuranceReminder/InsuranceReminderTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const BikerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="email" source="email" />
        <TextField label="username" source="username" />
        <ReferenceField
          label="VoiceChatRoom"
          source="voicechatroom.id"
          reference="VoiceChatRoom"
        >
          <TextField source={VOICECHATROOM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="InsuranceReminder"
          source="insurancereminder.id"
          reference="InsuranceReminder"
        >
          <TextField source={INSURANCEREMINDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Location"
          target="bikerId"
          label="Locations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="latitude" source="latitude" />
            <TextField label="longitude" source="longitude" />
            <ReferenceField label="Biker" source="biker.id" reference="Biker">
              <TextField source={BIKER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InsuranceReminder"
          target="bikerId"
          label="InsuranceReminders"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="reminderDate" source="reminderDate" />
            <ReferenceField label="Biker" source="biker.id" reference="Biker">
              <TextField source={BIKER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="VoiceChatRoom"
          target="bikerId"
          label="VoiceChatRooms"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <ReferenceField label="Biker" source="biker.id" reference="Biker">
              <TextField source={BIKER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
