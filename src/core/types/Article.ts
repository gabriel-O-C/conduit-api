import { Profile } from '@/core/types/Profile'
import { Tag } from '@/core/types/Tag'
export type Article = {
  slug: string
  title: string
  description: string
  body: string
  tagList: Tag[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: Profile
}

export type Articles = {
  articles: Article[]
  articlesCount: number
}
