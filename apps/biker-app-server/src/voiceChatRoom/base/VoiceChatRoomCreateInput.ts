/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { BikerCreateNestedManyWithoutVoiceChatRoomsInput } from "./BikerCreateNestedManyWithoutVoiceChatRoomsInput";
import { Type } from "class-transformer";
import { BikerWhereUniqueInput } from "../../biker/base/BikerWhereUniqueInput";

@InputType()
class VoiceChatRoomCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => BikerCreateNestedManyWithoutVoiceChatRoomsInput,
  })
  @ValidateNested()
  @Type(() => BikerCreateNestedManyWithoutVoiceChatRoomsInput)
  @IsOptional()
  @Field(() => BikerCreateNestedManyWithoutVoiceChatRoomsInput, {
    nullable: true,
  })
  bikers?: BikerCreateNestedManyWithoutVoiceChatRoomsInput;

  @ApiProperty({
    required: false,
    type: () => BikerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BikerWhereUniqueInput)
  @IsOptional()
  @Field(() => BikerWhereUniqueInput, {
    nullable: true,
  })
  biker?: BikerWhereUniqueInput | null;
}

export { VoiceChatRoomCreateInput as VoiceChatRoomCreateInput };