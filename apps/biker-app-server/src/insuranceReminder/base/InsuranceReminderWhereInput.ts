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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BikerListRelationFilter } from "../../biker/base/BikerListRelationFilter";
import { BikerWhereUniqueInput } from "../../biker/base/BikerWhereUniqueInput";

@InputType()
class InsuranceReminderWhereInput {
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
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  reminderDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => BikerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BikerListRelationFilter)
  @IsOptional()
  @Field(() => BikerListRelationFilter, {
    nullable: true,
  })
  bikers?: BikerListRelationFilter;

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
  biker?: BikerWhereUniqueInput;
}

export { InsuranceReminderWhereInput as InsuranceReminderWhereInput };
