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
    name: 'projects',
    href: '/projects',
  },
  {
    name: 'yigit',
    href: '/yigit',
  },
  {
    name: 'donate',
    href: 'https://yigitozel.xyz',
    type: 'dropdown',
  },
]
