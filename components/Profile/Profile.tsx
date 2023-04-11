import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

import profilePhoto from "../../public/images/profile-photo.png"
import gitHub from "../../public/icons/github.svg"
import linkedIn from "../../public/icons/linkedin.svg"
import twitter from "../../public/icons/twitter.svg"
import instagram from "../../public/icons/instagram.svg"
import contact from "@/pages/contact"

type Props = {
  highLight: boolean
}

function Profile({ highLight }: Props) {
  return (
    <div className="about">
      <div className={highLight ? "info left highlight" : "info left"}>
        <div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In ut nobis
            provident.
          </h3>

          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
            dignissimos dolore nobis esse voluptatum distinctio labore ipsum
            harum id.
          </h4>
        </div>
        <div className="contact">
          <Link href="/contact">
            <button className="btn-contact">Contact Me</button>
          </Link>

          <button className="btn-social">
            <Image src={gitHub} alt="gitHub" width={24} />
          </button>
          <button className="btn-social">
            <Image src={instagram} alt="instagram" width={24} />
          </button>
          <button className="btn-social">
            <Image src={twitter} alt="twitter" width={24} />
          </button>
          <button className="btn-social">
            <Image src={linkedIn} alt="linkedIn" width={24} />
          </button>
        </div>
      </div>
      <Image
        src={profilePhoto}
        alt="profil p"
        className="info right"
        width={100}
        height={100}
      />
    </div>
  )
}

export default Profile
