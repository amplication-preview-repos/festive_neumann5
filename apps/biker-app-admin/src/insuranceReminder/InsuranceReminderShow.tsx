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

import { VOICECHATROOM_TITLE_FIELD } from "../voiceChatRoom/VoiceChatRoomTitle";
import { INSURANCEREMINDER_TITLE_FIELD } from "./InsuranceReminderTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";
import { BIKER_TITLE_FIELD } from "../biker/BikerTitle";

export const InsuranceReminderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="reminderDate" source="reminderDate" />
        <ReferenceField label="Biker" source="biker.id" reference="Biker">
          <TextField source={BIKER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Biker"
          target="insuranceReminderId"
          label="Bikers"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
