import Link from "next/link"
import ImageFrame from "./ImageFrame"

type Package = {
  pricePerMonth: number,
  name: string,
  benefits: string[]
}

const Packages: Package[] = [
  { name: 'Basic', pricePerMonth: 135, benefits: ['One day trial', 'No supporter', 'Free 5 lesons', 'Limited courses', 'Limited registered user'] },
  { name: 'POPULAR', pricePerMonth: 165, benefits: ['Limited courses', 'Free 50+ lesons', 'One day standard', 'Random supporter', 'Limited registered user'] },
  { name: 'PREMIER', pricePerMonth: 195, benefits: ['Free supporter', 'Life time access', 'Free 500+ leson', 'Unlimited courses', 'Limited registered user'] }
]

const Price = () => {
  return (
    <div id="price">
      <div className="info">
        <ImageFrame id="7" title="PRICING" >
          <Link href="#">
            <a className="more">view all</a>
          </Link>
        </ImageFrame>
        <div className="txt-frame">
          <div className="list-pricing">
            <ul className="row">
              {Packages.map((pkg, idx) => {
                return (
                  <li key={idx} className="price col-md-4 col-sm-4">
                    <div className="price-box">
                      <div className="icon">
                        <div className="ico-text">
                          <div className="ico-box">
                            <span className="price-tag"><sup>$</sup>{pkg.pricePerMonth}</span>
                            <span className="month">/month</span>
                          </div>
                        </div>
                      </div>
                      <strong className="package">{pkg.name}</strong>
                      <ul className="benefits">
                        {pkg.benefits.map((benefit, idx) => {
                          return (
                            <li key={idx}>{benefit}</li>
                          )
                        })}
                      </ul>
                      <a href="#" className="plan">SELECT PLAN</a>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price