import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { CreateUser } from '@/core/types/User'

export type OutsideRegister<A> = (data: CreateUser) => Promise<A>

type Register = <A>(outsideRegister: OutsideRegister<A>) =>
  (data: CreateUser) => TE.TaskEither<Error, A>

export const register: Register = (OutsideRegister) => (data) => {
  return pipe(
    TE.tryCatch(
      () => OutsideRegister(data),
      E.toError,
    ),
  )
}
