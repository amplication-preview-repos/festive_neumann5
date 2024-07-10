import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BikerTitle } from "../biker/BikerTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="latitude" source="latitude" />
        <NumberInput label="longitude" source="longitude" />
        <ReferenceInput source="biker.id" reference="Biker" label="Biker">
          <SelectInput optionText={BikerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="bikers"
          reference="Biker"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BikerTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
