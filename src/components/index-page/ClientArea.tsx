
type ClientSection = {
  iconName: string,
  icon: string,
  title: string,
  cnt: number
}

const Client: ClientSection[] = [
  { iconName:'coffee', icon: 'images/ico-10.svg', title: 'COFFEE CUPS', cnt: 0 },
  { iconName:'heart', icon: 'images/ico-11.svg', title: 'HAPPY CLIENTS', cnt: 0 },
  { iconName:'task', icon: 'images/ico-12.svg', title: 'PROJECTS', cnt: 0 },
  { iconName:'days', icon: 'images/ico-13.svg', title: 'WORKING DAYS', cnt: 0 },
  { iconName:'team', icon: 'images/ico-14.svg', title: 'TEAM MEMBERS', cnt: 0 }
]

const ClientArea = () => {
  return (
    <ul className="client-area">
      {Client.map((client, idx) => {
        return (
          <li key={idx}>
            <div className="box">
              <i className={`ico ${client.iconName}`}>
                <img src={client.icon} alt="image description" />
              </i>
              <strong className="title">{client.title}</strong>
              <span className="count counter">{client.cnt}</span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ClientArea;