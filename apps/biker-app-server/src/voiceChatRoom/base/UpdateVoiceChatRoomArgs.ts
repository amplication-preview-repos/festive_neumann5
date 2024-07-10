/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VoiceChatRoomWhereUniqueInput } from "./VoiceChatRoomWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VoiceChatRoomUpdateInput } from "./VoiceChatRoomUpdateInput";

@ArgsType()
class UpdateVoiceChatRoomArgs {
  @ApiProperty({
    required: true,
    type: () => VoiceChatRoomWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VoiceChatRoomWhereUniqueInput)
  @Field(() => VoiceChatRoomWhereUniqueInput, { nullable: false })
  where!: VoiceChatRoomWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VoiceChatRoomUpdateInput,
  })
  @ValidateNested()
  @Type(() => VoiceChatRoomUpdateInput)
  @Field(() => VoiceChatRoomUpdateInput, { nullable: false })
  data!: VoiceChatRoomUpdateInput;
}

export { UpdateVoiceChatRoomArgs as UpdateVoiceChatRoomArgs };
