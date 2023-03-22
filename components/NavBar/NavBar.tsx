import Link from "next/link"

function NavBar() {
  return (
    <nav id="nav">
      <h4>yusha</h4>
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
          <Link href="/">Works</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
