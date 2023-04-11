import Link from "next/link"
import Image from "next/image"
import profilePhoto from "../../public/images/profile-photo.png"

function NavBar() {
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
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="#content">Works</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
