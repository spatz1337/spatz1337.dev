import { MainLayout } from 'layouts/MainLayout'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentData, Component } from 'data/setup'

export const ComponentText = ({ type, href, name }: Component) => {
  return (
    <li>
      <span>{type}</span>
      <FontAwesomeIcon className="mx-2" icon={['fas', 'caret-right']} />
      <a rel="noopener noreferrer" target="_blank" href={href}>
        {name}
      </a>
    </li>
  )
}

const Setup = () => {
  return (
    <MainLayout title="1337 Nedir?" description="1337 yani LEET anlamına gelen hacker alfabesi">
      <article className="max-w-none w-full prose prose-lg dark:prose-dark">
        <div>
          <h3></h3>
          <ul>
            {ComponentData.map((component) => (
              <ComponentText
                key={uuidv4()}
                type={component.type}
                href={component.href}
                name={component.name}
              />
            ))}
          </ul>
        </div>
        <div>
          <h3>Discord</h3>
          <div className="flex flex-col gap-y-3">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://discord.gg/gayrimesru"
            >
              My Discord Server (1337)
            </a>
          </div>
        </div>
      </article>
    </MainLayout>
  )
}

export default Setup
