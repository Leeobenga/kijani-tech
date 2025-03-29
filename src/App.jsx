import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
import pepper from "/src/assets/pepper-7200198.jpg"
import photovoltaic from "/src/assets/photovoltaic-system-2742302_1280.jpg"
import Tanzania from "/src/assets/tanzania-278361.jpg"
import "./App.css"



function App() {
  const articles = [
    {
      id: 1,
      img: pepper,
      header: "Empower a farmer with solar irrigation",
      description: "Make 120 farmers receive solar irrigation and get started with smart farming",
      goal: 45000,
      rise: 5000
      },
      {
      id: 2,
      img: photovoltaic,
      header: "Train and Equip a Climate-Smart Farmer",
      description: "600 farmers trained in smart farming to optimize production and conserve the environment",
      goal: 22500,
      rise: 8000
      },
      {
      id: 3,
      img: Tanzania,
      header: "Help Spread Awareness & Drive Change",
      description: "Expand outreach and education in rural communities on smart farming methods",
      goal: 6000,
      rise: 1500
    }
      ];

  return (
    <Router>
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


