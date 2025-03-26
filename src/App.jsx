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
import "./App.css"


function App() {
  

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
    </Routes>
  </Router>
  )
}

export default App


