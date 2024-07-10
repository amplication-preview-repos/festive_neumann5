import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BikerTitle } from "../biker/BikerTitle";

export const InsuranceReminderCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="reminderDate" source="reminderDate" />
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
