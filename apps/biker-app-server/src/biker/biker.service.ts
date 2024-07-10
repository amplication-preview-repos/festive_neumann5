import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BikerServiceBase } from "./base/biker.service.base";

@Injectable()
export class BikerService extends BikerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
