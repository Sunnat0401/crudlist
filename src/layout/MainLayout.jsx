// rrd imports
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
function MainLayout() {
  return <>
  {/* NAVBAR */}
  <Navbar/>
   <main>
    <Outlet/>
   </main>
   {/* FOOTER */}
  </>
}

export default MainLayout
