import * as graphql from "@nestjs/graphql";
import { BikerResolverBase } from "./base/biker.resolver.base";
import { Biker } from "./base/Biker";
import { BikerService } from "./biker.service";

@graphql.Resolver(() => Biker)
export class BikerResolver extends BikerResolverBase {
  constructor(protected readonly service: BikerService) {
    super(service);
  }
}
