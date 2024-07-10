import * as graphql from "@nestjs/graphql";
import { InsuranceReminderResolverBase } from "./base/insuranceReminder.resolver.base";
import { InsuranceReminder } from "./base/InsuranceReminder";
import { InsuranceReminderService } from "./insuranceReminder.service";

@graphql.Resolver(() => InsuranceReminder)
export class InsuranceReminderResolver extends InsuranceReminderResolverBase {
  constructor(protected readonly service: InsuranceReminderService) {
    super(service);
  }
}
