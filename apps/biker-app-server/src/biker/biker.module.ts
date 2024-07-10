import { Module } from "@nestjs/common";
import { BikerModuleBase } from "./base/biker.module.base";
import { BikerService } from "./biker.service";
import { BikerController } from "./biker.controller";
import { BikerResolver } from "./biker.resolver";

@Module({
  imports: [BikerModuleBase],
  controllers: [BikerController],
  providers: [BikerService, BikerResolver],
  exports: [BikerService],
})
export class BikerModule {}
