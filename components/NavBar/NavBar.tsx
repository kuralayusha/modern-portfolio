import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import myFoto from '../../public/images/myFoto.jpg'
import profilePhoto from '../../public/images/profile-photo.png'

type Props = {
  setHighLight: (highLight: boolean) => void
}

function NavBar({ setHighLight }: Props) {
  const [scroll, setScroll] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  function highlightAbout() {
    setHighLight(true)
    setTimeout(() => {
      setHighLight(false)
    }, 5000)
  }
  return (
    <nav id="nav" className={scroll ? 'nav active' : 'nav'}>
      <div className="logo">
        <Image
          src={myFoto}
          alt="profil p"
          className="profile-photo"
          width={30}
          height={30}
        ></Image>
        <h4>Kurley</h4>
      </div>
      <ul>
        <li onClick={() => setHighLight(false)}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={highlightAbout}>
          <Link href="/">About</Link>
        </li>
        <li onClick={() => setHighLight(false)}>
          <Link href="/contact">Contact</Link>
        </li>
        <li onClick={() => setHighLight(false)}>
          <Link href="#works">Works</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
