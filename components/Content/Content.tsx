import Image from 'next/image'
import Link from 'next/link'
import arrow from '../../public/icons/arrow.svg'

type contentProps = {
  data: any
}

function Content({ data }: contentProps) {
  function handleMouseMove(e: any) {
    const { currentTarget: target } = e

    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    target.style.setProperty('--mouse-x', `${x}px`)
    target.style.setProperty('--mouse-y', `${y}px`)
  }

  // in this function, I want to get the id of the card that is being hovered
  // and then apply the hover effects to the nearby cards
  function handleMouseMoveTwo(e: any) {
    // if there is no card being hovered, then return
    if (e.target.id === '') {
      return
    } else {
      for (const card of e.currentTarget.children) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top

        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
      }
    }
  }

  return (
    <div
      className="contents"
      onMouseMove={(e) => handleMouseMoveTwo(e)}
    >
      {data.map((project: any) => (
        <div
          className="content--card"
          key={project.id}
          id={project.id.toString()}
          style={{
            backgroundImage: `url(${project.image[0]})`,
          }}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="card--info">
            <div className="bar-left">
              <h4>{project.name}</h4>
              <small>{project.description}</small>
            </div>
            <Link href={project.link} target="_blank">
              <button>
                <Image src={arrow} alt="arrow" width={10}></Image>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Content
