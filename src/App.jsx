import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/scrollToTop"
import Header from "./components/header"
import Overview from "./components/overview"
import Objectives from "./components/objectives"
import Stats from "./components/stats"
import Process from "./components/process"
import Questions from "./components/questions"
import Fundraising from "./components/fundraising"
import Expert from "./components/experts"
import Blog from "./components/blogs"
import Footer from "./components/footer"
import Contact from "./pages/contact"
import Home from "./pages/home"
import About from "./pages/about"
import Solution from "./pages/solutions"
import Impact from "./pages/impact"
import Resources from "./pages/resources"
import Donation from "./pages/donation"
import pepper from "/src/assets/pepper-7200198.webp"
import photovoltaic from "/src/assets/photovoltaic-system-2742302_1280.webp"
import Tanzania from "/src/assets/tanzania-278361.webp"
import training from "/src/assets/train-farmer.avif"
import solarPump from "/src/assets/solar-pump.webp"
import equipFarmer from "/src/assets/equipFarmer.jpg"
import "./App.css"
import "./Donation.css"
import "./questions.css"
import "./main-navbar.css"
import "./objectives.css"
import "./overview.css"
import "./process.css"
import "./fundraising.css"
import "./blogs.css"
import "./footer.css"
import "./experts.css"
import "./page-header.css"
import "./about-us.css"
import "./solutions.css"
import "./impact.css"
import "./resources.css"



function App() {
  const articles = [
    {
      id: 1,
      img: pepper, 
      img2: solarPump,     
      header: "Empower a farmer with solar irrigation",  
      details: "Empowering a farmer with solar irrigation provides a sustainable solution to water..." ,
      description:  "Empowering a farmer with solar irrigation provides a sustainable solution to water access, increasing agricultural productivity while reducing reliance on costly and environmentally harmful fuel-powered pumps.",
      goal: 45000,
      rise: 5000,      
      },
      {
      id: 2,
      img: photovoltaic,
      img2:equipFarmer ,
      header: "Train and Equip a Climate-Smart Farmer",
      details: "600 farmers trained in smart farming to optimize production and conserve the environment.",
      description: "600 farmers trained in smart farming to optimize production and conserve the environment. Training farmers to optimize production using solar pumps enhances efficiency, reduces costs, and promotes sustainability. Solar-powered irrigation provides a reliable water source, increasing yields while reducing dependency on expensive and polluting fossil fuels.",
      goal: 22500,
      rise: 8000
      },
      {
      id: 3,
      img: Tanzania,
      img2: training,      
      header: "Help Spread Awareness & Drive Change",
      details: "Creating awareness about smart farming and solar irrigation is essential for enhancing agricultural productivity and sustainability...",
      description: "Creating awareness about smart farming and solar irrigation is essential for enhancing agricultural productivity and sustainability.By educating farmers on these innovations, governments, NGOs, and private sector stakeholders can help improve food security, reduce operational costs, and promote eco-friendly agricultural practices. ",
      goal: 6000,
      rise: 1500
    }
      ];

  return (
    <Router>
      <ScrollToTop />
     <Routes>
        <Route path="/" element={
        <>
          <Header />
          <main>
            <Overview />
            <Objectives />
            <Stats />
            <Process />
            <Questions />
            <Fundraising />
            <Expert />
            <Blog />      
          </main>
          <Footer />
        </>
        }>
        </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/solutions" element={<Solution />}></Route>
        <Route path="/impact" element={<Impact />}></Route>
        <Route path="resources" element={<Resources />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/donation" element={<Donation articles={articles} />}></Route>
    </Routes>
  </Router>
  )
}

export default App


