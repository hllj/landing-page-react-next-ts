import Link from "next/link";
import ImageFrame from "./ImageFrame"
import SelectBox from "./SelectBox";
import TextBox from "./TextBox";

import {Member} from "../../interfaces/index"
import { useState } from "react";

const Team: Member[] = [
  {id: 0, name: "Kawhi Leonard", position: "CREATIVE DIRECTOR", img: "/images/img-04.jpg", desc: "We tend to think of Steam as tools for content developers and tools for producers. We're just always thinking."},
  {id: 1, name: "Sammy Filton", position: "STYLELIST", img: "/images/img-77.jpg", desc: "We tend to think of Steam as tools for content developers and tools for producers. We're just always thinking."},
  {id: 2, name: "Sandra Jackson", position: "ART DIRECTOR", img: "/images/img78.jpg", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudanm, totam rem aperiam, eaque."}
]

const AboutTeam = () => {
  const [view, setView] = useState(Team[0]);
  return (
    <div id="about-team" className="max-container">
      <div className="info team frame-reverse">
        <ImageFrame id="2" title="OUR TEAMS" imgSrc={view.img}>
          <Link href="#">
            <a className="more">view all</a>
          </Link>
        </ImageFrame>
        <div className="txt-frame">
          <TextBox name={view.name} position={view.position} desc={view.desc}/>
          <SelectBox view={view} Team={Team} setView={setView}/>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;