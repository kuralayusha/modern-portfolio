import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import Image from "next/image"

import close from "../../public/icons/close.svg"
import gitHub from "../../public/icons/github.svg"
import linkedIn from "../../public/icons/linkedin.svg"
import twitter from "../../public/icons/twitter.svg"
import instagram from "../../public/icons/instagram.svg"

function Contact() {
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.ChangeEvent<any>) => {
    e.preventDefault()
    if (!form.current) {
      return
    }

    emailjs
      .sendForm(
        "service_jmocyqi",
        "template_781kv9e",
        form.current,
        "yveSA6FqcEOfzesg3"
      )
      .then(
        (result) => {
          // console.log(result.text)
        },
        (error) => {
          // console.log(error.text)
        }
      )
    e.target.reset()
  }

  function handleGoBack() {
    window.location.href = "/"
  }
  return (
    <div className="contact--container">
      <button className="to--home" onClick={handleGoBack}>
        <Image className="close--icon" src={close} alt="close" width={20} />
      </button>

      <div className="socials">
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

      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="double--input">
          <input
            className="mail--inputs"
            type="text"
            placeholder="Your Name"
            name="user_name"
            required
            autoComplete="off"
          />
          <input
            className="mail--inputs"
            type="email"
            placeholder="exemple@email.com"
            name="user_email"
            required
            autoComplete="off"
          />
        </div>
        <input
          className="mail--inputs"
          type="Text"
          placeholder="Subject"
          name="subject"
          required
          autoComplete="off"
        />
        <textarea
          className="mail--inputs message"
          placeholder="Your message"
          name="message"
          required
          autoComplete="off"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
