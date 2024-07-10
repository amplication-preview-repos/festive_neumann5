import { Module } from "@nestjs/common";
import { VoiceChatRoomModuleBase } from "./base/voiceChatRoom.module.base";
import { VoiceChatRoomService } from "./voiceChatRoom.service";
import { VoiceChatRoomController } from "./voiceChatRoom.controller";
import { VoiceChatRoomResolver } from "./voiceChatRoom.resolver";

@Module({
  imports: [VoiceChatRoomModuleBase],
  controllers: [VoiceChatRoomController],
  providers: [VoiceChatRoomService, VoiceChatRoomResolver],
  exports: [VoiceChatRoomService],
})
export class VoiceChatRoomModule {}
