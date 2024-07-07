import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { IntegrationService } from "./integration.service";
import { FacebookMessageDto } from "../integration/FacebookMessageDto";

@swagger.ApiTags("integrations")
@common.Controller("integrations")
export class IntegrationController {
  constructor(protected readonly service: IntegrationService) {}

  @common.Get("/facebook/messages")
  @swagger.ApiOkResponse({
    type: FacebookMessageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetFacebookMessages(
    @common.Body()
    body: FacebookMessageDto
  ): Promise<FacebookMessageDto[]> {
        return this.service.GetFacebookMessages(body);
      }

  @common.Post("/claude/send")
  @swagger.ApiOkResponse({
    type: FacebookMessageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendToClaude(
    @common.Body()
    body: FacebookMessageDto
  ): Promise<FacebookMessageDto> {
        return this.service.SendToClaude(body);
      }
}
