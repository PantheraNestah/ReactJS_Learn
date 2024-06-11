/* import "./css/style.min.css" */
import "./scss/style.scss";

import MyHeader from './components/cHeader'
import StackSection from './components/stack-section'
import MyLegend from "./components/cLegend"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <MyHeader />
      <MyLegend />
      <StackSection />
      <Footer />
    </>
  )
}

export default App
