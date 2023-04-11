import Link from "next/link"
import Image from "next/image"
import profilePhoto from "../../public/images/profile-photo.png"

type Props = {
  setHighLight: (highLight: boolean) => void
}

function NavBar({ setHighLight }: Props) {
  function highlightAbout() {
    setHighLight(true)
    setTimeout(() => {
      setHighLight(false)
    }, 9000)
  }
  return (
    <nav id="nav">
      <div className="logo">
        <Image
          src={profilePhoto}
          alt="profil p"
          className="profile-photo"
          width={30}
          height={30}
        ></Image>
        <h4>Kurley</h4>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li onClick={highlightAbout}>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="#works">Works</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
