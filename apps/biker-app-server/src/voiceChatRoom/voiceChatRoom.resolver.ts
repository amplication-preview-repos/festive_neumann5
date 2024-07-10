import * as graphql from "@nestjs/graphql";
import { VoiceChatRoomResolverBase } from "./base/voiceChatRoom.resolver.base";
import { VoiceChatRoom } from "./base/VoiceChatRoom";
import { VoiceChatRoomService } from "./voiceChatRoom.service";

@graphql.Resolver(() => VoiceChatRoom)
export class VoiceChatRoomResolver extends VoiceChatRoomResolverBase {
  constructor(protected readonly service: VoiceChatRoomService) {
    super(service);
  }
}
