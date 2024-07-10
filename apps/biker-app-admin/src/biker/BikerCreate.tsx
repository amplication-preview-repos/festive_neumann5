import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VoiceChatRoomTitle } from "../voiceChatRoom/VoiceChatRoomTitle";
import { LocationTitle } from "../location/LocationTitle";
import { InsuranceReminderTitle } from "../insuranceReminder/InsuranceReminderTitle";

export const BikerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="username" source="username" />
        <ReferenceInput
          source="voiceChatRoom.id"
          reference="VoiceChatRoom"
          label="VoiceChatRoom"
        >
          <SelectInput optionText={VoiceChatRoomTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="locations"
          reference="Location"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LocationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="insuranceReminder.id"
          reference="InsuranceReminder"
          label="InsuranceReminder"
        >
          <SelectInput optionText={InsuranceReminderTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="insuranceReminders"
          reference="InsuranceReminder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InsuranceReminderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="voiceChatRooms"
          reference="VoiceChatRoom"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VoiceChatRoomTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
