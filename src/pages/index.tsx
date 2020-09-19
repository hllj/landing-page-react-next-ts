import Link from 'next/link'
import AboutTeam from '../components/index-page/AboutTeam'
import AboutUs from '../components/index-page/AboutUs'
import Blog from '../components/index-page/Blog'
import ClientArea from '../components/index-page/ClientArea'
import OurWork from '../components/index-page/OurWork'
import Price from '../components/index-page/Price'
import Testimonial from '../components/index-page/Testimonial'
import Layout from '../components/layouts/Layout'

const IndexPage = () => (
  <Layout title="EAGLEEYES">
    <div className="max-container">
      <AboutUs />
      <AboutTeam />
      <OurWork />
      <Testimonial />
      <Blog />
      <Price />
      <ClientArea />
    </div>
  </Layout>
)

export default IndexPage
