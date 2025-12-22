import Hero from './Hero/page'
import About from './About/page'
import Paralex from './Paralex/page'
import Services from './Services/page'
import Expertise from './Expertise/page'
import PricingPlans from './PricingPlans/page'
import Testimonial from './Testimonial/page'
import Faqs from './Faq/page'
import Banner from './Banner/page'


export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Paralex />
      <Services />
      <Expertise />
      <PricingPlans />
      <Testimonial />
      <Faqs />
      <Banner />
    </>
  )
}