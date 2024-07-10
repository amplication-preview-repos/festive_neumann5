import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BikerTitle } from "../biker/BikerTitle";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
