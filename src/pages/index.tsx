import Link from 'next/link'
import AboutTeam from '../components/index-page/AboutTeam'
import AboutUs from '../components/index-page/AboutUs'
import OurWork from '../components/index-page/OurWork'
import Testimonial from '../components/index-page/Testimonial'
import Layout from '../components/layouts/Layout'

const IndexPage = () => (
  <Layout title="EAGLEEYES">
    <AboutUs />
    <AboutTeam /> 
    <OurWork />
    <Testimonial />

  </Layout>
)

export default IndexPage
