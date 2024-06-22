/* import "./css/style.min.css" */
import "./scss/style.scss";

import MyHeader from './components/cHeader'
import StackSection from './components/my_stack/stack-section'
import MyLegend from "./components/legend/cLegend"
import Projects from "./components/projects/projects";
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <MyHeader />
      <MyLegend />
      <StackSection />
      <Projects />
      <Footer />
    </>
  )
}

export default App

