import * as graphql from "@nestjs/graphql";
import { FacebookMessageDto } from "../integration/FacebookMessageDto";
import { IntegrationService } from "./integration.service";

export class IntegrationResolver {
  constructor(protected readonly service: IntegrationService) {}

  @graphql.Query(() => [FacebookMessageDto])
  async GetFacebookMessages(
    @graphql.Args()
    args: string
  ): Promise<FacebookMessageDto[]> {
    return this.service.GetFacebookMessages(args);
  }

  @graphql.Mutation(() => FacebookMessageDto)
  async SendToClaude(
    @graphql.Args()
    args: FacebookMessageDto
  ): Promise<FacebookMessageDto> {
    return this.service.SendToClaude(args);
  }
}
