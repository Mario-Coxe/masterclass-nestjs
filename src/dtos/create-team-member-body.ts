import { IsNotEmpty, Length } from "class-validator"

export default  class CreateTeamMemberBody {
  @IsNotEmpty({
    message: "The member name should not be empty"
  })
  @Length(5, 15)
  name: string

  @IsNotEmpty({
    message: "The member functio should not be empty"
  })
  function: string
}


