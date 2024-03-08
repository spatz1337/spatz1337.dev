import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Account {
  name: string
  href?: string
  icon?: IconProp
  copyEmail?: () => void
}

export const AccountData: Account[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/nyrezzq',
  },
  {
    name: 'Twitter',
    href: 'https://instagram.com/yigitmvq',
  },
  {
    name: 'Email',
    icon: ['fas', 'envelope'],
  },
]
