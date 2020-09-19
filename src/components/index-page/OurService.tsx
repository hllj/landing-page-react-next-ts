import Link from "next/link";
import ImageFrame from "./ImageFrame";

type Service = {
  id: number,
  icon: string,
  title: string,
  desc: string
}

const Services: Service[] = [
  { id: 0, icon: "fas fa-cut", title: "HANDICRAFTS", desc: "Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros." },
  { id: 1, icon: "fas fa-magic", title: "BRANDING DESIGN", desc: "Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros." },
  { id: 2, icon: "fas fa-mobile-alt", title: "DIGITAL GRAPHICS", desc: "Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros." },
  { id: 3, icon: "fas fa-bullseye", title: "MARKETING", desc: "Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros." },
  { id: 4, icon: "fas fa-mug-hot", title: "COFFEE & RESTAURANT", desc: "Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros." },
  { id: 5, icon: "fa fa-home", title: "FURNITURE DESIGN", desc: "Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros." },
  { id: 6, icon: "fas fa-life-ring", title: "AWESOME SUPPORT", desc: "Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros." },
  { id: 7, icon: "fas fa-thumbs-up", title: "EASY TO CUSTOMIZE", desc: "Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros." },
  { id: 8, icon: "fas fa-user-shield", title: "PROTECT SOLUTIONS", desc: "Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros." }
]

const OurService = () => {
  return (
    <div id="our-work" >
      <div className="info team frame-reverse">
        <ImageFrame id="4" title="OUR SERVICES">
          <Link href="#">
            <a className="more">order services</a>
          </Link>
        </ImageFrame>
        <div className="txt-frame">
          <ul className="services row">
            {Services.map((service, idx) => {
              return (
                <li key={idx} className="col-md-4 col-sm-4">
                  <h3>
                    <i className={service.icon}></i>
                    <span>{service.title}</span>
                  </h3>
                  <p>{service.desc}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OurService;