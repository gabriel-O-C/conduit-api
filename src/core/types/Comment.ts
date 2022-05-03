import { Profile } from '@/core/types/Profile'
export type Comment = {
  id: number
  createdAt: string
  updatedAt: string
  body: string
  author: Profile
}
