
// import { Outlet } from "react-router";
// import Navbar from "../Components/Navbar";


// const layout = () => {
//   return (
//     <div>
//       <div className=" sticky top-0">
//         <Navbar />
//       </div>
//     <Outlet/>
//     </div>
//   )
// }

// export default layout


import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div className="bg-[#EDF0F5] min-h-screen">
      <div className="sticky top-0">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
