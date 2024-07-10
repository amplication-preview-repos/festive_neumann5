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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VoiceChatRoomWhereUniqueInput } from "../../voiceChatRoom/base/VoiceChatRoomWhereUniqueInput";
import { LocationListRelationFilter } from "../../location/base/LocationListRelationFilter";
import { InsuranceReminderWhereUniqueInput } from "../../insuranceReminder/base/InsuranceReminderWhereUniqueInput";
import { InsuranceReminderListRelationFilter } from "../../insuranceReminder/base/InsuranceReminderListRelationFilter";
import { VoiceChatRoomListRelationFilter } from "../../voiceChatRoom/base/VoiceChatRoomListRelationFilter";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";

@InputType()
class BikerWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  username?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => VoiceChatRoomWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VoiceChatRoomWhereUniqueInput)
  @IsOptional()
  @Field(() => VoiceChatRoomWhereUniqueInput, {
    nullable: true,
  })
  voiceChatRoom?: VoiceChatRoomWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => LocationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LocationListRelationFilter)
  @IsOptional()
  @Field(() => LocationListRelationFilter, {
    nullable: true,
  })
  locations?: LocationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => InsuranceReminderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InsuranceReminderWhereUniqueInput)
  @IsOptional()
  @Field(() => InsuranceReminderWhereUniqueInput, {
    nullable: true,
  })
  insuranceReminder?: InsuranceReminderWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => InsuranceReminderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InsuranceReminderListRelationFilter)
  @IsOptional()
  @Field(() => InsuranceReminderListRelationFilter, {
    nullable: true,
  })
  insuranceReminders?: InsuranceReminderListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => VoiceChatRoomListRelationFilter,
  })
  @ValidateNested()
  @Type(() => VoiceChatRoomListRelationFilter)
  @IsOptional()
  @Field(() => VoiceChatRoomListRelationFilter, {
    nullable: true,
  })
  voiceChatRooms?: VoiceChatRoomListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => LocationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocationWhereUniqueInput)
  @IsOptional()
  @Field(() => LocationWhereUniqueInput, {
    nullable: true,
  })
  location?: LocationWhereUniqueInput;
}

export { BikerWhereInput as BikerWhereInput };
