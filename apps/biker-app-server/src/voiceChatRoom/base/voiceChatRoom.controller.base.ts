/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VoiceChatRoomService } from "../voiceChatRoom.service";
import { VoiceChatRoomCreateInput } from "./VoiceChatRoomCreateInput";
import { VoiceChatRoom } from "./VoiceChatRoom";
import { VoiceChatRoomFindManyArgs } from "./VoiceChatRoomFindManyArgs";
import { VoiceChatRoomWhereUniqueInput } from "./VoiceChatRoomWhereUniqueInput";
import { VoiceChatRoomUpdateInput } from "./VoiceChatRoomUpdateInput";
import { BikerFindManyArgs } from "../../biker/base/BikerFindManyArgs";
import { Biker } from "../../biker/base/Biker";
import { BikerWhereUniqueInput } from "../../biker/base/BikerWhereUniqueInput";

export class VoiceChatRoomControllerBase {
  constructor(protected readonly service: VoiceChatRoomService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VoiceChatRoom })
  async createVoiceChatRoom(
    @common.Body() data: VoiceChatRoomCreateInput
  ): Promise<VoiceChatRoom> {
    return await this.service.createVoiceChatRoom({
      data: {
        ...data,

        biker: data.biker
          ? {
              connect: data.biker,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        biker: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [VoiceChatRoom] })
  @ApiNestedQuery(VoiceChatRoomFindManyArgs)
  async voiceChatRooms(
    @common.Req() request: Request
  ): Promise<VoiceChatRoom[]> {
    const args = plainToClass(VoiceChatRoomFindManyArgs, request.query);
    return this.service.voiceChatRooms({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        biker: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VoiceChatRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async voiceChatRoom(
    @common.Param() params: VoiceChatRoomWhereUniqueInput
  ): Promise<VoiceChatRoom | null> {
    const result = await this.service.voiceChatRoom({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        biker: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: VoiceChatRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVoiceChatRoom(
    @common.Param() params: VoiceChatRoomWhereUniqueInput,
    @common.Body() data: VoiceChatRoomUpdateInput
  ): Promise<VoiceChatRoom | null> {
    try {
      return await this.service.updateVoiceChatRoom({
        where: params,
        data: {
          ...data,

          biker: data.biker
            ? {
                connect: data.biker,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,

          biker: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: VoiceChatRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVoiceChatRoom(
    @common.Param() params: VoiceChatRoomWhereUniqueInput
  ): Promise<VoiceChatRoom | null> {
    try {
      return await this.service.deleteVoiceChatRoom({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,

          biker: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/bikers")
  @ApiNestedQuery(BikerFindManyArgs)
  async findBikers(
    @common.Req() request: Request,
    @common.Param() params: VoiceChatRoomWhereUniqueInput
  ): Promise<Biker[]> {
    const query = plainToClass(BikerFindManyArgs, request.query);
    const results = await this.service.findBikers(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        username: true,

        voiceChatRoom: {
          select: {
            id: true,
          },
        },

        insuranceReminder: {
          select: {
            id: true,
          },
        },

        location: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bikers")
  async connectBikers(
    @common.Param() params: VoiceChatRoomWhereUniqueInput,
    @common.Body() body: BikerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bikers: {
        connect: body,
      },
    };
    await this.service.updateVoiceChatRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bikers")
  async updateBikers(
    @common.Param() params: VoiceChatRoomWhereUniqueInput,
    @common.Body() body: BikerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bikers: {
        set: body,
      },
    };
    await this.service.updateVoiceChatRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bikers")
  async disconnectBikers(
    @common.Param() params: VoiceChatRoomWhereUniqueInput,
    @common.Body() body: BikerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bikers: {
        disconnect: body,
      },
    };
    await this.service.updateVoiceChatRoom({
      where: params,
      data,
      select: { id: true },
    });
  }
}
