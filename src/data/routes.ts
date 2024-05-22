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
    name: 'Spotify Artist',
    href: 'https://open.spotify.com/artist/7HqyL38KCvr8Y2k60I9qUz',
    type: 'dropdown',
  },
]
