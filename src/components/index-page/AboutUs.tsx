import ImageFrame from "./ImageFrame";

const AboutUs = () => {
  return (
    <div id="about-us" className="max-container">
      <div className="info">
        <ImageFrame id="1" title="ABOUT US" imgSrc="/images/img-02.jpg">
          <div className="box">
            <div className="box-inner">
              <h3>Louis Frank</h3>
              <p>Co-Founder at Eagleeyes</p>
            </div>
          </div>
        </ImageFrame>
        <div className="txt-frame">
          <h3>About Us</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudanm, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed ttquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          <div className="signature">
            <img src="/images/img-03.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;