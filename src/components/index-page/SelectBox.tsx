import { Member } from "../../interfaces/index";

type Props = {
  view: Member,
  Team: Member[],
  setView: object
}

const changeView = (member, setView) => {
  console.log(1);
  setView(member);
}

const SelectBox = ({ view, Team, setView}: Props) => {
  return (
    <div className="select-choice">
      {Team.map((member, idx) => {
        if (member.id !== view.id)
          return (
            <div key={member.id} className="choice" onClick={() => {changeView(member, setView)}}>
              <div className="img">
                <a className="team1-opener">
                  <img src={member.img} alt="image description" />
                </a></div>
              <div className="txt-choice">
                <h3>
                  <a className="team1-opener">{member.name}</a>
                </h3>
                <span className="designation">{member.position}</span>
              </div>
            </div>
          )
      })}
    </div>
  )
}

export default SelectBox; 