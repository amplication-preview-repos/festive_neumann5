import { InsuranceReminder as TInsuranceReminder } from "../api/insuranceReminder/InsuranceReminder";

export const INSURANCEREMINDER_TITLE_FIELD = "id";

export const InsuranceReminderTitle = (record: TInsuranceReminder): string => {
  return record.id?.toString() || String(record.id);
};
