import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BikerTitle } from "../biker/BikerTitle";

export const VoiceChatRoomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="bikers"
          reference="Biker"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BikerTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="biker.id" reference="Biker" label="Biker">
          <SelectInput optionText={BikerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
