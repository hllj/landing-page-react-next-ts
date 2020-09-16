import Link from "next/link";

type Props = {
  name: string,
  position: string,
  img?: string,
  desc: string
}

const TextBox = ({ name, position, img, desc }: Props) => {
  return (
    <div className="txt-box txt-box1">
      <div className="box-info">
        <h2><a href="#">{name}</a></h2>
        <span>{position}</span>
        <ul className="social-network">
          <li>
            <Link href="#">
              <a>
                <i className="fab fa-facebook-f"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <i className="fab fa-twitter"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <i className="fab fa-google-plus"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <i className="fab fa-pinterest"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="box-description">
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default TextBox;