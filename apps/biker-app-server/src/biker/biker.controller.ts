import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BikerService } from "./biker.service";
import { BikerControllerBase } from "./base/biker.controller.base";

@swagger.ApiTags("bikers")
@common.Controller("bikers")
export class BikerController extends BikerControllerBase {
  constructor(protected readonly service: BikerService) {
    super(service);
  }
}
