import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoiceChatRoomServiceBase } from "./base/voiceChatRoom.service.base";

@Injectable()
export class VoiceChatRoomService extends VoiceChatRoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
