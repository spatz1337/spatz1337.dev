import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'erensezen.com.tr',
    description:
      "you met this boy % i work on c#, c++, async, js, php % i write code and it brings money",
    href: 'https://github.com/nyrezzq',
    icon: ['fas', 'wifi'],
  },
  {
    title: 'Spotify',
    description:
      "spotify personal acc",
    href: 'https://open.spotify.com/user/3157aaso6e7uctlnnwm2xy7yrjpm?si=e31f37fd5ed748fe',
    icon: ['fas', 'music'],
  },
   {
    title: 'Instagram',
    description:
      "@yigitmvq",
    href: 'https://www.instagram.com/yigitmvq/',
    icon: ['fas', 'home'],
  }
]
