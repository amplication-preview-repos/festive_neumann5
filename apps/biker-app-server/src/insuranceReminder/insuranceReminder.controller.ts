import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InsuranceReminderService } from "./insuranceReminder.service";
import { InsuranceReminderControllerBase } from "./base/insuranceReminder.controller.base";

@swagger.ApiTags("insuranceReminders")
@common.Controller("insuranceReminders")
export class InsuranceReminderController extends InsuranceReminderControllerBase {
  constructor(protected readonly service: InsuranceReminderService) {
    super(service);
  }
}
