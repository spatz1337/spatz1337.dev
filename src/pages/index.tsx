import { MainLayout } from 'layouts/MainLayout'
import { GenericMeta } from 'components/GenericMeta'
import { v4 as uuidv4 } from 'uuid'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Account, AccountData } from 'data/accounts'
import { NowPlayingCard } from 'components/NowPlayingCard'
const Time = dynamic(() => import('components/Time'), {
  ssr: false,
})

const SocialLink = ({ name, href, icon, copyEmail }: Account) => {
  return (
    <a
      aria-label={name}
      onClick={() => copyEmail && copyEmail()}
      className="cursor-pointer fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon size="1x" icon={icon ? icon : ['fab', name.toLowerCase() as IconName]} />
    </a>
  )
}

const Home = () => {
  const { theme } = useTheme()

  const copyEmail = () => {
    navigator.clipboard.writeText('nyrezzv@proton.me')
    theme === 'dark'
      ? toast.success('Copied email to clipboard!', {
          style: {
            background: '#333',
            color: '#fff',
          },
        })
      : toast.success('Copied email to clipboard!')
  }

  return (
    <>
      <a rel="me" href="https://instagram.com/yigitmvq" style={{"display": "none"}}></a>
      <GenericMeta title="Yiğit Özel" description="Cyber Sec# and Software Developer from Turkey." />

      <MainLayout margin={false}>
        <h1 className="text-6xl font-bold">Hacked By Spatz</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-sm mt-2">
          https://guns.lol/spatz
        </p>
        <div className="grid grid-flow-col w-48 mt-3 text-lg">
          {AccountData.map((account) => (
            <SocialLink
              key={uuidv4()}
              name={account.name}
              href={account.href}
              icon={account.icon}
              copyEmail={copyEmail}
            />
          ))}
        </div>
        <div className="grid my-8 gap-2">
          <Time />
        </div>
        <div>
          <NowPlayingCard />
        </div>
      </MainLayout>
    </>
  )
}

export default Home
