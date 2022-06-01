import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'itsnebula.net',
    description:
      "The website you're currently on! Forked from ven.earth, made with Next.js and utilises serverless functions.",
    href: 'https://github.com/itsnebulalol/itsnebula.net',
    icon: ['fas', 'home'],
  },
]
