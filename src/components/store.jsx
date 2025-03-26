import Resources from "../pages/resources";

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