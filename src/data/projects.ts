import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'yigitozel.com.tr',
    description:
      "you meet this boy % i work on c#, c++, async, js, php % i write code and it brings money",
    href: 'https://github.com/nyrezzq',
    icon: ['fas', 'wifi'],
  },
  {
    title: 'Spotify Artist',
    description:
      "Nyrezz",
    href: 'https://open.spotify.com/artist/7HqyL38KCvr8Y2k60I9qUz',
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
