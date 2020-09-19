import Link from "next/link";
import { useState } from "react";
import ImageFrame from "./ImageFrame";

type Testimonial = {
  id: number,
  name: string,
  position: string,
  imgSrc: string,
  para: string
}

const Testimonials: Testimonial[] = [
  { id: 0, name: "Kawhi Leonard", position: "CREATIVE DIRECTOR", imgSrc: "images/img-15.jpg", para: "“I am so happy because I found this Eagleeyes, and it just made my life easier. Thanks so much for sharing”" },
  { id: 1, name: "Umair Rafi", position: "CREATIVE DEVELOPER", imgSrc: "images/img-14.jpg", para: "“I am so happy because I found this Eagleeyes, and it just made my life easier. Thanks so much for sharing”" },
  { id: 2, name: "Leo Alpha", position: "UI/UX DIRECTOR", imgSrc: "images/img-13.jpg", para: "“I am so happy because I found this Eagleeyes, and it just made my life easier. Thanks so much for sharing”" }
]

const Testimonial = () => {
  const [member, setMember] = useState(Testimonials[0])
  return (
    <div id="testimonial" className="max-container">
      <div className="info">
        <ImageFrame id="5" title="TESTIMONIALS" >
          <Link href="#">
            <a className="more">view all</a>
          </Link>
        </ImageFrame>
        <div className="txt-frame">
          <div className="slider">
            <div className="mask">
              <div className="slide">
                <blockquote>
                  <q>{member.para}</q>
                  <cite>
                    <span className="heading4">{member.name}</span>
                    <span className="designation">{member.position}</span>
                  </cite>
                  <div className="select-slide">
                    <ul className="mask-inner">
                      {Testimonials.map((testimonial, idx) => {
                        return (
                          <li key={idx}>
                            <a className={testimonial.id === member.id ? 'active' : ''} onClick={() => {setMember(testimonial)}}>
                              <img src={testimonial.imgSrc} alt="image description" />
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </blockquote>
                <div className="images">
                  <img src={member.imgSrc} alt="image description" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;