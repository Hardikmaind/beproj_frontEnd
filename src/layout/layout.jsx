
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";


const layout = () => {
  return (
    <div>
      <div className=" sticky top-0">
        <Navbar />
      </div>
    <Outlet/>
    </div>
  )
}

export default layout
