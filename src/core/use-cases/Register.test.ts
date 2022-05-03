import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/lib/function'
import { register, OutsideRegister } from './user/Register'
import { CreateUser } from '../types/User'
const registerOk: OutsideRegister<string> = async (data) => {
  return `User ${data.username} registered succesfully!`
}
const data: CreateUser = {
  username: 'John',
  email: 'john@doe.com',
  password: '123456Dummy@',
}
describe('Tests the register user function', () => {
  it('Should register an user succesfully', async () => {
    return pipe(
      data,
      register(registerOk),
      TE.map(result => expect(result).toBe(`User ${data.username} registered succesfully!`)),
    )()
  })
})
