import { Module } from "@nestjs/common";
import { InsuranceReminderModuleBase } from "./base/insuranceReminder.module.base";
import { InsuranceReminderService } from "./insuranceReminder.service";
import { InsuranceReminderController } from "./insuranceReminder.controller";
import { InsuranceReminderResolver } from "./insuranceReminder.resolver";

@Module({
  imports: [InsuranceReminderModuleBase],
  controllers: [InsuranceReminderController],
  providers: [InsuranceReminderService, InsuranceReminderResolver],
  exports: [InsuranceReminderService],
})
export class InsuranceReminderModule {}
