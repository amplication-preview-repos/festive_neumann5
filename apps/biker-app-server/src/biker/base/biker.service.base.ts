/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Biker as PrismaBiker,
  Location as PrismaLocation,
  InsuranceReminder as PrismaInsuranceReminder,
  VoiceChatRoom as PrismaVoiceChatRoom,
} from "@prisma/client";

export class BikerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BikerCountArgs, "select">): Promise<number> {
    return this.prisma.biker.count(args);
  }

  async bikers(args: Prisma.BikerFindManyArgs): Promise<PrismaBiker[]> {
    return this.prisma.biker.findMany(args);
  }
  async biker(args: Prisma.BikerFindUniqueArgs): Promise<PrismaBiker | null> {
    return this.prisma.biker.findUnique(args);
  }
  async createBiker(args: Prisma.BikerCreateArgs): Promise<PrismaBiker> {
    return this.prisma.biker.create(args);
  }
  async updateBiker(args: Prisma.BikerUpdateArgs): Promise<PrismaBiker> {
    return this.prisma.biker.update(args);
  }
  async deleteBiker(args: Prisma.BikerDeleteArgs): Promise<PrismaBiker> {
    return this.prisma.biker.delete(args);
  }

  async findLocations(
    parentId: string,
    args: Prisma.LocationFindManyArgs
  ): Promise<PrismaLocation[]> {
    return this.prisma.biker
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .locations(args);
  }

  async findInsuranceReminders(
    parentId: string,
    args: Prisma.InsuranceReminderFindManyArgs
  ): Promise<PrismaInsuranceReminder[]> {
    return this.prisma.biker
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .insuranceReminders(args);
  }

  async findVoiceChatRooms(
    parentId: string,
    args: Prisma.VoiceChatRoomFindManyArgs
  ): Promise<PrismaVoiceChatRoom[]> {
    return this.prisma.biker
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .voiceChatRooms(args);
  }

  async getVoiceChatRoom(
    parentId: string
  ): Promise<PrismaVoiceChatRoom | null> {
    return this.prisma.biker
      .findUnique({
        where: { id: parentId },
      })
      .voiceChatRoom();
  }

  async getInsuranceReminder(
    parentId: string
  ): Promise<PrismaInsuranceReminder | null> {
    return this.prisma.biker
      .findUnique({
        where: { id: parentId },
      })
      .insuranceReminder();
  }

  async getLocation(parentId: string): Promise<PrismaLocation | null> {
    return this.prisma.biker
      .findUnique({
        where: { id: parentId },
      })
      .location();
  }
}