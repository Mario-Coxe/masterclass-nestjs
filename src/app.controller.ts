import { Body, Controller, Post } from '@nestjs/common';
import CreateTeamMemberBody from './dtos/create-team-member-body';
import { RocketMemberRepository } from './repositories/rocket-members-repository';
@Controller()
export class AppController {
  constructor(private rocketMemberRepository: RocketMemberRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    await this.rocketMemberRepository.create(body.name, body.function)

  }
}
