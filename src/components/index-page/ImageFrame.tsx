import { ReactNode } from "react";

type Props = {
  children?: ReactNode,
  id: string,
  title: string,
  imgSrc?: string
}

const ImageFrame = ({ children, id, title, imgSrc}: Props) => {
  return (
    <div className="img-frame">
      <div className="text">
        <span className="num">{"0" + id}</span>
        <h2 className="tild">{title}</h2>
        {children}
      </div>
      {imgSrc && 
      <div className="image">
        <img src={imgSrc} />
      </div>
      }
    </div>
  )
}

export default ImageFrame;