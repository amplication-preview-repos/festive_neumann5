import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VoiceChatRoomService } from "./voiceChatRoom.service";
import { VoiceChatRoomControllerBase } from "./base/voiceChatRoom.controller.base";

@swagger.ApiTags("voiceChatRooms")
@common.Controller("voiceChatRooms")
export class VoiceChatRoomController extends VoiceChatRoomControllerBase {
  constructor(protected readonly service: VoiceChatRoomService) {
    super(service);
  }
}
