import { IsNotEmpty } from "class-validator"

export default  class CreateTeamMemberBody {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  function: string
}


