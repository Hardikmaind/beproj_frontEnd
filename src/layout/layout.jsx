
import Navbar from "../Components/Navbar";


const layout = ({children}) => {
  return (
    <div>
      <div className=" sticky top-0">
        <Navbar />
      </div>
     {children}
    </div>
  )
}

export default layout
