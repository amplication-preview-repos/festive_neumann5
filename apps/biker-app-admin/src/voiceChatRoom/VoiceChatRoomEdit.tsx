import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BikerTitle } from "../biker/BikerTitle";

export const VoiceChatRoomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
