import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Route {
  name: string
  href: string
  type?: string
  icon?: IconProp
}

export const RouteData: Route[] = [
  {
    name: 'home',
    href: '/',
    icon: ['fas', 'home'],
  },
  {
    name: 'info',
    href: '/projects',
  },
  {
    name: 'blog',
    href: '/blog',
  },
  {
    name: '1337',
    href: '/setup',
    type: 'dropdown',
  },
]
