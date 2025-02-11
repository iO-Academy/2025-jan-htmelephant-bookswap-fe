import { Link, NavLink } from "react-router-dom";
import ClaimedBookPage from "./ClaimedBookNavLink";
import { useState } from "react";

export default function Nav() {

  const [PageSelected, setPageSelected] = useState(false)
  
  function handleNavClick(){
      setPageSelected (!PageSelected)
      console.log(PageSelected)
      set
  }

  return (
    
    <nav className="grid grid-cols-1 md:grid-cols-2  p-4 max-sm:flex-col max-sm:items-center items-center">
      <Link className="text-center md:text-left" to="/">Book Swap</Link>


      
        <div className="flex justify-center gap-4 text-center md:justify-end">
          
          <NavLink 
          to="/"
          style={({isActive}) => ({ 
          color: isActive ? '#fff' : '#545e6f',
          background: isActive ? '#7600dc' : '#f0f0f0',
          })}
          onClick={handleNavClick}
          > 
          Available Books
          </NavLink>




          {/* <Link to="/" onClick={handleNavClick}> Available Books {PageSelected ? "yes" : "no"} </Link> */}
          <Link to="/claimed-books/">Claimed Books</Link>
        </div>
      
    </nav>
  );
}


// class="{{ error ? 'text-red-600' : 'text-green-600' }}"

//     return(
//         <div>
//             <button onClick={handleClick}>{isShowing ? "Log out" : "Log in"}</button>
//             {isShowing &&
//                 <></>
//             }
//         </div>
//     )
// }