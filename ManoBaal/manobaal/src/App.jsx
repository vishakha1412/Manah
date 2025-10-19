import { Outlet } from "react-router"
import Navbar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import { AITalk } from "./components/AITalk/AITalk"

 

function App() {
   

  return (
    <>
    <Navbar/>
    <Outlet/>
    <AITalk/>
    <Footer/>
    </>
  )
}

export default App
