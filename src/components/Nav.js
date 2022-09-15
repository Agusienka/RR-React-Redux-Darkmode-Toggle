import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar';



function Nav() {
    const mode = useSelector((state) => state.mode)

    return (
        <div className="container" style={{'backgroundColor': mode.color3}}>
            
        <Navbar>
      
          <Navbar.Brand href="#home" style={{fontSize: "30px"}}>Home Page</Navbar.Brand>
          <Navbar.Toggle />
    
      </Navbar>
        </div>
    )
}

export default Nav
