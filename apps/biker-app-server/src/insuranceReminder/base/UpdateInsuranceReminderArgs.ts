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
import { InsuranceReminderWhereUniqueInput } from "./InsuranceReminderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InsuranceReminderUpdateInput } from "./InsuranceReminderUpdateInput";

@ArgsType()
class UpdateInsuranceReminderArgs {
  @ApiProperty({
    required: true,
    type: () => InsuranceReminderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InsuranceReminderWhereUniqueInput)
  @Field(() => InsuranceReminderWhereUniqueInput, { nullable: false })
  where!: InsuranceReminderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InsuranceReminderUpdateInput,
  })
  @ValidateNested()
  @Type(() => InsuranceReminderUpdateInput)
  @Field(() => InsuranceReminderUpdateInput, { nullable: false })
  data!: InsuranceReminderUpdateInput;
}

export { UpdateInsuranceReminderArgs as UpdateInsuranceReminderArgs };
