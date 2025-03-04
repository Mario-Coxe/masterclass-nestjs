import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { RocketMemberRepository } from './repositories/rocket-members-repository';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, {
    provide: RocketMemberRepository,
    useClass: PrismaRocketMembersRepository
  }],
})
export class AppModule {}
