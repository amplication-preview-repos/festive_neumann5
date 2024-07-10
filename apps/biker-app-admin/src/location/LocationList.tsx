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
import { BIKER_TITLE_FIELD } from "../biker/BikerTitle";

export const LocationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Locations"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
