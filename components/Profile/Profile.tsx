import profilePhoto from "../../public/images/profile-photo.png"
import Image from "next/image"

function Profile() {
  return (
    <div className="about">
      <div className="info left">
        <div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In ut nobis
            provident.
          </h3>

          <small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
            dignissimos dolore nobis esse voluptatum distinctio labore ipsum
            harum id.
          </small>
        </div>
        <div className="contact">
          <button className="btn-contact">Contact Me</button>
          <button className="btn-link">IG</button>
          <button className="btn-link">FB</button>
          <button className="btn-link">LI</button>
          <button className="btn-link">TW</button>
        </div>
      </div>
      <Image
        src={profilePhoto}
        alt="profil p"
        className="info right"
        // width="200"
      />
    </div>
  )
}

export default Profile
