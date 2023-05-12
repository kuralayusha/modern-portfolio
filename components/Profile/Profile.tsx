import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

import profilePhoto from '../../public/images/profile-photo.png'
import myFoto from '../../public/images/myFoto.jpg'
import gitHub from '../../public/icons/github.svg'
import linkedIn from '../../public/icons/linkedin.svg'
import twitter from '../../public/icons/twitter.svg'
import instagram from '../../public/icons/instagram.svg'
import contact from '@/pages/contact'

type Props = {
  highLight: boolean
}

function Profile({ highLight }: Props) {
  return (
    <div className="about">
      <div
        className={highLight ? 'info left highlight' : 'info left'}
      >
        <div>
          <h3>
            Hi! my name is Yusha and I am a computer engineering
            student.
          </h3>

          <h4>
            For me, frontend development is the most satisfying thing
            to do. I am currently looking for a job because being a
            part of a team that shares the same passion as me is my
            primary goal. Please don&apos;t hesitate to contact me on
            any topic. I hope you enjoy my projects.
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
      <Image src={myFoto} alt="profil p" className="info right" />
    </div>
  )
}

export default Profile
