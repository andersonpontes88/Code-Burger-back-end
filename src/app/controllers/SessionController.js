import * as Yup from "yup"
import User from "../models/User.js"

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    })

    const emailPasswordIncorrect = () => {
      return response
        .status(401)
        .json({ error: "Check if your password or email is correct" })
    }

    if (!(await schema.isValid(request.body))) emailPasswordIncorrect()

    const { email, password } = request.body

    const user = await User.findOne({
      where: { email },
    })

    if (!user) emailPasswordIncorrect()

    
    if (!(await user.checkPassword(password))) {
      return response
        .status(401)
        .json({ error: "Check if your password or email is correct" })
    }

    return response.json({
      id: user.id,
      email,
      name: user.name,
      admin: user.admin,
    })
  }
}

export default new SessionController()
