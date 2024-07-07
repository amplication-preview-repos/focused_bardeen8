import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class FacebookWebhookDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    object!: string;

    @Field(() => [[GraphQLJSON]])
    entry!: InputJsonValue[];
}

export { FacebookWebhookDto as FacebookWebhookDto };