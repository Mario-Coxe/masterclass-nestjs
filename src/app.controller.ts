import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import CreateTeamMemberBody from './dtos/create-team-member-body';
import { randomUUID } from 'node:crypto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private prisma: PrismaService) {}

  @Get('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {

    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name: body.name,
        function: body.function
      }
    })

    return {
      member
    }
    //return this.appService.getHello();
  }
}
