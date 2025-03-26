import Header from "/src/components/header"
import Overview from "/src/components/overview"
import Objectives from "/src/components/objectives"
import Stats from "/src/components/stats"
import Process from "/src/components/process"
import Questions from "/src/components/questions"
import Fundraising from "/src/components/fundraising"
import Expert from "/src/components/experts"
import Blog from "/src/components/blogs"
import Footer from "/src/components/footer"

const Home = () => {
    return (
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
    )
}

export default Home;