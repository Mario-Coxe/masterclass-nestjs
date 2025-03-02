import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private prisma: PrismaService) {}

  @Get('hello')
  async getHello() {

    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: "text",
        name: "Coxe",
        function: "Capitão"
      }
    })

    return {
      member
    }
    //return this.appService.getHello();
  }
}
