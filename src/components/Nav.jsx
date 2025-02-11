import { Link, NavLink } from "react-router-dom";
import ClaimedBookPage from "./ClaimedBookNavLink";
import { useState } from "react";

export default function Nav() {

  const [PageSelected, setPageSelected] = useState(false)
  
  function handleNavClick(){
      setPageSelected (!PageSelected)
  }

  return (
    
    <nav className="grid grid-cols-1 p-4 items-center max-sm:flex-col max-sm:items-center md:grid-cols-2">
      <Link className="text-center md:text-left" to="/">Book Swap</Link>

        <div className="flex justify-center gap-4 text-center md:justify-end">
          <NavLink 
            to="/"
            style={({isActive}) => ({ 
            fontWeight: isActive ? 'bold' : 'normal',
            padding: "5px",
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
            })}
            onClick={handleNavClick}
          > 
            Available Books
          </NavLink>

          <NavLink 
            to="/claimed-books/"
            style={({isActive}) => ({ 
            fontWeight: isActive ? 'bold' : 'normal',
            padding: "5px",
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
            })}
            onClick={handleNavClick}
          > 
            Claimed Books
          </NavLink>
        </div>
      
    </nav>
  );
}