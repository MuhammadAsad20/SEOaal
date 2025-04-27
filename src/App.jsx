
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Form from "./components/Form"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Info from "./components/Info"
import LogoBar from "./components/LogoBar"
import News from "./components/News"
import Pricing from "./components/Pricing"
import ServiceCard from "./components/ServiceCard"
import Stats from "./components/Stats"

function App() {
  

  return (
    <div className=" text-black">
      <Header/>
      <Hero/>
      <ServiceCard/>
      <Stats/>
      <Info/>
      <Form/>
      <Pricing/>
      <LogoBar/>
      <Feature/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App
