import { Injectable } from "@nestjs/common";
import { FacebookMessageDto } from "../integration/FacebookMessageDto";

@Injectable()
export class IntegrationService {
  constructor() {}
  async GetFacebookMessages(args: string): Promise<FacebookMessageDto[]> {
    throw new Error("Not implemented");
  }
  async SendToClaude(args: FacebookMessageDto): Promise<FacebookMessageDto> {
    throw new Error("Not implemented");
  }
}
