import Image from 'next/image'
import Link from 'next/link'

type contentProps = {
  data: any
}

function Content({ data }: contentProps) {
  return (
    <div className="contents">
      {data.map((project: any) => (
        <div
          className="content--card"
          key={project.id}
          id={project.id.toString()}
          style={{
            backgroundImage: `url(${project.image[0]})`,
          }}
        >
          <div className="card--bar">
            <div className="bar-left">
              <h4>{project.name}</h4>
              <small>{project.description}</small>
            </div>
            <Link href={project.link} target="_blank">
              <button>.</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Content
