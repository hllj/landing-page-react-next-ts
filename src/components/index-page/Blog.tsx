import Link from "next/link";
import ImageFrame from "./ImageFrame";

type Article = {
  id: number,
  title: string,
  desc: string,
  img: string,
  author: string,
  weeklast: number
}

const Articles: Article[] = [
  { id: 0, title: "We Do The Best Design", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa  officia deserunt mollitid est laborum. Sed ut perspiciatis unde qui omnis iste natus error sit voluptatem.", img: "images/img-16.jpg", author: "Leonard", weeklast: 1 },
  { id: 1, title: "Friendly For All Devices", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa  officia deserunt mollitid est laborum. Sed ut perspiciatis unde qui omnis iste natus error sit voluptatem.", img: "images/img-17.jpg", author: "Leonard", weeklast: 1 }
]

const Blog = () => {
  return (
    <div id="blog" className="max-container">
      <div className="info blog frame-reverse">
        <ImageFrame id="6" title="OUR BLOGS">
          <Link href="#">
            <a className="more">view all</a>
          </Link>
        </ImageFrame>
        <div className="txt-frame">
          {Articles.map((article, idx) => {
            return (
              <div key={idx} className="blog-article">
                <div className="image">
                  <img src={article.img} />
                  <span>by {article.author}, {article.weeklast} week ago</span>
                </div>
                <div className="blog-desc">
                  <h3>{article.title}</h3>
                  <p>{article.desc}</p>
                  <a href="#" className="continue"><span>CONTINUE</span>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Blog;