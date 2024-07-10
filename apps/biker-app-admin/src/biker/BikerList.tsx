import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VOICECHATROOM_TITLE_FIELD } from "../voiceChatRoom/VoiceChatRoomTitle";
import { INSURANCEREMINDER_TITLE_FIELD } from "../insuranceReminder/InsuranceReminderTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const BikerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bikers"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
