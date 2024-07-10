import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InsuranceReminderServiceBase } from "./base/insuranceReminder.service.base";

@Injectable()
export class InsuranceReminderService extends InsuranceReminderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
